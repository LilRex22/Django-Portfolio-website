from django.shortcuts import render
from Projects.models import Project
from Projects.models import Profile
from django.core.mail import EmailMessage
from django.conf import settings


def home(request):
    obj = Project.objects.all()
    obj2 = Profile.objects.first()
    obj3 = obj[:3]
    return render(request, 'home.html', {'projects': obj, 'profile': obj2})

def projects(request):
    obj = Project.objects.all()
    return render(request, 'projects.html', {'projects': obj})

def about(request):
    return render(request, 'about.html', {})

def contact(request):
    form = request.POST
    if request.method == 'POST' and form.get('name') and form.get('email') and form.get('message'):
        name = form.get('name')
        email = form.get('email')
        message = form.get('message')
        
        # we send an email to ourselves with the contact form details
        # email = EmailMessage(
        #     subject=f'New Contact Form Submission from {name}',
        #     body=message,
        #     from_email=email,
        #     to=[settings.EMAIL_HOST_USER],
        # )
        # email.send(fail_silently=False)
        
        # import requests

        # url = "https://api.brevo.com/v3/smtp/email"

        # headers = {
        #     "accept": "application/json",
        #     "api-key": settings.EMAIL_HOST_PASSWORD,
        #     "content-type": "application/json"
        # }

        # payload = {
        #     "sender": {
        #         "name": "Code.Rex.com",
        #         "email": "noreply@myapp.com"
        #     },
        #     "to": [
        #         {"email": settings.EMAIL_HOST_USER}
        #     ],
        #     "replyTo": {
        #         "email": email,
        #         "name": name
        #     },
        #     "subject": "Yoo! You have a new contact form submission!",
        #     "htmlContent": f"Hi, i am {name} and here is my message: <br><br>{message} <br><br>You can reply to me at {email}"
        # }

        # requests.post(url, json=payload, headers=headers)

    return render(request, 'contact.html', {})