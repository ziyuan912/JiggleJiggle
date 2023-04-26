import os
from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from .forms import *
from django.core.mail import EmailMessage
from django.views.decorators import gzip
from django.http import StreamingHttpResponse
from .camera import *
from datetime import datetime


def poseMatching(request):
    return render(request, 'poseMatch.html')

def gen(camera):
	while True:
		frame = camera.get_frame()
		yield (b'--frame\r\n'
			b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def video_feed(request):
	return StreamingHttpResponse(gen(VideoCamera()),
								content_type='multipart/x-mixed-replace;boundary=frame')

def video_upload(request):
	print(Video.objects.count())
	if request.method == 'POST':
		form= VideoForm(request.POST, request.FILES)
		if form.is_valid():
			file = request.FILES['file']
			file_name = os.path.split(file.name)[-1]
			name = os.path.splitext(file_name)[0]
			video = Video(name=name, videofile=file)
			video.save()
			video_processor = VideoProcess(file)
			context= {'videofile': file,
			          'form': form
			          }
			  
			return render(request, 'uploadVideo.html', context)
	else:
		form= VideoForm()
	return render(request, 'uploadVideo.html', {'form': form})
