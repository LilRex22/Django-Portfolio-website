from django.shortcuts import render
from Projects.models import Project



def home(request):
    obj = Project.objects.all()
    return render(request, 'home.html', {'projects': obj})