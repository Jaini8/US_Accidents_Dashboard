from django.urls import path

from . import views
app_name = "us_accidents_app"

urlpatterns= [
    path('', views.home , name="home"),
    path('demographics', views.index , name="index"),
    path('home', views.home , name="home"),
    path('insights', views.insights , name ="insights"),
    path('factors', views.factors, name="factors")
]