from django.urls import path
from . import views


urlpatterns = [
	path('', views.poseMatching, name='poseMatching'),
	path('video_feed', views.video_feed, name='video_feed'),
	path('video_upload', views.show_video, name='poseMatching'),
]