from django.urls import path

from .import views

urlpatterns = [
    path('',views.home,name='home'),
    path("signup/",views.signup_view, name="signup"),
    path('showcurrentmonth/',views.showcurrentmonth, name='showcurrentmonth'),
    path(' vacations/',  views.vacations, name='vacations'),
    path('workingusers/', views.workingusers, name='workingusers'),
    path(' requestvacation/',  views.requestvacation, name='requestvacation'),
]