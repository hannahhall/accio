from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^recognize/', views.recognize, name='recognize'),
    url(r'^login/', views.loginUser, name="login"),
    url(r'^register/', views.newUser, name="register"),

]
