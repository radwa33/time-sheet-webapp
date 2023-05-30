from django.shortcuts import render, redirect
from django.shortcuts import render
from django.contrib.auth import login, authenticate
from .form import registerForm
from django.shortcuts import render, redirect
import time
from datetime import datetime,date
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import  WorkingHour

@login_required(login_url='/accounts/login')
def home(request):
    t = time.localtime()
    current_time =datetime.now().strftime("%Y-%m-%dT%H:%M:%S") #time.strftime("%H:%M:%S", t)
    print(current_time)


    return render(request, 'home.html', {'current_time':current_time})

def starttime(request):
    try:
        obj=WorkingHour.objects.get(user=request.user,date= date.today())
        current_record=obj.start_time #convert string to array
        current_record.append(time.now()) #convert array to string
        #implement how to append to an exist json
        WorkingHour.objects.filter(user=request.user,date= date.today()).update(start_time=current_record)
    except:
        start_json='a' #search for how create json in python and add it to django object
        obj= WorkingHour(start_time=start_json,user=request.user)
        obj.save()

def signup_view(request):
    form = registerForm(request.POST)
    if form.is_valid():
        form.save()
        firstname = form.cleaned_data.get('firstname')
        lastname=form.cleaned_data.get('lastname')
        email=form.cleaned_data.get('email')
        password = form.cleaned_data.get('password1')
        username = form.cleaned_data.get('username')
        user = authenticate(username=username, password=password,firstname=firstname,lastname=lastname)


        # login(request, user)
        return redirect('home')
    else:
        form = registerForm(request.POST)
    return render(request, 'signup.html', {'form': form})

def showcurrentmonth(request):
    return render(request,'showcurrentmonth.html')


def vacations(request):
    return render(request, 'vacations.html')


def workingusers(request):
    return render(request, 'workingusers.html')


def requestvacation(request):
    return render(request, 'requestvacation.html')
