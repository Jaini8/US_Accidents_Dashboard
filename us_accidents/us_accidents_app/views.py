from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import Persons, Accidents, Home1, Home2, Home3, Home4, Home5,Vehicles, Factors

import json
import time

# Create your views here.


def index(request):
    plot2Data = json.dumps(list(Home2.objects.values('YR_NO','STATE', 'STATENAME', 'COUNTY','SEX', 'FATALS')), separators=(',', ':'))
    plot3Data = json.dumps(list(Home3.objects.values('YR_NO', 'STATE', 'STATENAME', 'SEX', 'AGE','FATALS')), separators=(',', ':'))
    plot4Data = json.dumps(list(Home4.objects.values('YR_NO','STATE', 'STATENAME', 'DAY_WEEK','SEX', 'FATALS')), separators=(',', ':'))
    plot5Data = json.dumps(list(Home5.objects.values('YR_NO','STATE', 'STATENAME', 'HOUR','SEX', 'FATALS')), separators=(',', ':'))
    # print(plot2Data[0:5])
    # print("Got data")
    return render(request, 'index.html', {'plot2Data':plot2Data, 'plot3Data':plot3Data, 'plot4Data':plot4Data, 'plot5Data':plot5Data, 'title':'CrashStats'})


def insights(request):
    return render(request, 'insights.html')


def factors(request):
    print("in factors")
    start = time.time()
    plotData = json.dumps(list(Factors.objects.values('date_acc', 'day_week', 'hour', 'fatals')), default=str, separators=(',', ':'))
    print("fetched data")
    end = time.time()
    print("time", (end-start))
    return render(request, 'factors.html', {'plotData':plotData, 'title':'Factors'})

def home(request):
    carplotData = json.dumps(list(Vehicles.objects.values('YR_NO', 'ST_CASE', 'IMPACT1')), default=str)
    return render(request, 'home.html', {'carplotData': carplotData})