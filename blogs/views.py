from django.shortcuts import render
from .models import Blog

# Create your views here.
def Blogs(request):
    obj = Blog.objects.all()
    return render(request, 'blogs.html', {'blogs': obj})

def Blog_detail(request, pk):
    obj = Blog.objects.get(id=pk)
    return render(request, 'blog_details.html', {'blog': obj})