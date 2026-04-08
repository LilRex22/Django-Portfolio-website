from django.shortcuts import render
from Projects.models import Project



def home(request):
    obj = Project.objects.all()
    obj3 = obj[:3]
    return render(request, 'home.html', {'projects': obj})

def projects(request):
    obj = Project.objects.all()
    return render(request, 'projects.html', {'projects': obj})

def about(request):
    return render(request, 'about.html', {})

def contact(request):
    return render(request, 'contact.html', {})