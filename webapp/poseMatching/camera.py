import cv2
import os
import dill as pickle
import urllib.request
import numpy as np
import mediapipe as mp
from django.conf import settings

mpPose = mp.solutions.pose
pose = mpPose.Pose()
mpDraw = mp.solutions.drawing_utils 
points = mpPose.PoseLandmark 

class VideoCamera(object):
	def __init__(self):
		self.video = cv2.VideoCapture(0)

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
		for pose in self.poses:
			if pose:
				print(pose.landmark)

video = VideoProcess('media/videoplayback.mp4')
video.save_pose('media/pose.pkl')
video.load_pose('media/pose.pkl')