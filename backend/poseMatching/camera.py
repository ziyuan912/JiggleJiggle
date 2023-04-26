import cv2
import os
import dill as pickle
import urllib.request
import numpy as np
import mediapipe as mp
from pathlib import Path
# from django.conf import settings

mpPose = mp.solutions.pose
pose = mpPose.Pose()
mpDraw = mp.solutions.drawing_utils 
points = mpPose.PoseLandmark 

BASE_DIR = Path(__file__).resolve().parent.parent
MEDIA_ROOT= os.path.join(BASE_DIR, 'media/')
POSE_VIDEO_ROOT = os.path.join(MEDIA_ROOT, 'poseVideo/')
POSE_ROOT = os.path.join(MEDIA_ROOT, 'pose/')

class VideoCamera(object):
	def __init__(self, file=None):
		if file:
			self.video = cv2.VideoCapture(file)
		else:
			self.video = cv2.VideoCapture(0)
		self.poses = []
		self.pose_video = None
		file_name = os.path.split(file)[-1]
		self.name = os.path.splitext(file_name)[0]
		self.pose_video_path = os.path.join(POSE_VIDEO_ROOT, self.name + '.mp4')
		self.pose_path = os.path.join(POSE_ROOT, self.name + '.pkl')

	def __del__(self):
		self.video.release()

	def get_frame(self):
		success, image = self.video.read()
		results = pose.process(image)
		if results.pose_landmarks:
			mpDraw.draw_landmarks(image, results.pose_landmarks, mpPose.POSE_CONNECTIONS)
			landmarks = results.pose_landmarks.landmark
			# print(type(landmarks))
			# for landmark in landmarks:
			# 	print(landmark)
		_, jpeg = cv2.imencode('.jpg', image)
		return jpeg.tobytes()

	def save_pose(self):
		self.poses = []
		fourcc = cv2.VideoWriter_fourcc(*'MP4V')
		fps = self.video.get(cv2.CAP_PROP_FPS)
		width = int(self.video.get(cv2.CAP_PROP_FRAME_WIDTH ))
		height = int(self.video.get(cv2.CAP_PROP_FRAME_HEIGHT ))
		print(fps, width, height)
		self.pose_video = cv2.VideoWriter(self.pose_video_path, fourcc, fps, (width,  height))
		while True:
			success, image = self.video.read()
			if not success:
				break
			results = pose.process(image)
			if results.pose_landmarks:
				mpDraw.draw_landmarks(image, results.pose_landmarks, mpPose.POSE_CONNECTIONS)
			self.pose_video.write(image)
			self.poses.append(results.pose_landmarks)
		self.pose_video.release()
		with open(self.pose_path, "wb+") as f:
			pickle.dump(self.poses, f)
		return

	def load_pose(self, file):
		self.poses = []
		with open(file, 'rb') as f:
			self.poses = pickle.load(f)

class VideoProcess(object):
	def __init__(self, video):
		self.video = cv2.VideoCapture(video)

	def __del__(self):
		self.video.release()

	def save_pose(self, file):
		self.poses = []
		while True:
			success, image = self.video.read()
			if not success:
				break
			results = pose.process(image)
			self.poses.append(results.pose_landmarks)
		with open(file, "wb+") as f:
			pickle.dump(self.poses, f)
		return
	def load_pose(self, file):
		self.poses = []
		with open(file, 'rb') as f:
			self.poses = pickle.load(f)
		# for pose in self.poses:
		# 	if pose:
		# 		print(pose.landmark)

video = VideoCamera('media/videos/videoplayback.mp4')
video.save_pose()
# video.load_pose('media/pose.pkl')