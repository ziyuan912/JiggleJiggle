from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from .forms import *
from django.core.mail import EmailMessage
from django.views.decorators import gzip
from django.http import StreamingHttpResponse
from poseMatching.camera import VideoCamera
from datetime import datetime

# Create your views here.

def poseMatching(request):
    return render(request, 'poseMatch.html')

def gen(camera):
	last_update = datetime.now()
	while True:

		now = datetime.now()
		print((now - last_update).total_seconds())
		last_update = datetime.now()

		frame = camera.get_frame()
		yield (b'--frame\r\n'
			b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def video_feed(request):
	return StreamingHttpResponse(gen(VideoCamera()),
								content_type='multipart/x-mixed-replace;boundary=frame')

def show_video(request):
	lastvideo= Video.objects.last()
	videofile= lastvideo.videofile

	form= VideoForm(request.POST or None, request.FILES or None)
	if form.is_valid():
		form.save()

	context= {'videofile': videofile,
	          'form': form
	          }
	  
	return render(request, 'Blog/videos.html', context)