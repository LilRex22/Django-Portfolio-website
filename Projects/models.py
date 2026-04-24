from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Project(models.Model):
    Image = CloudinaryField('image', resource_type='image', folder='profile')
    Name = models.CharField(max_length=100)
    Description = models.TextField()
    Tech_stack1 = CloudinaryField('image', resource_type='image', folder='techstack', null=True, blank=True)
    Tech_stack2 = CloudinaryField('image', resource_type='image', folder='techstack', null=True, blank=True)
    Tech_stack3 = CloudinaryField('image', resource_type='image', folder='techstack', null=True, blank=True)
    Link = models.CharField(max_length=255)
    Github = models.CharField(null=True, blank=True)
    
    
    def __str__(self):
        return self.Name
    
class Profile(models.Model):
        cv = CloudinaryField('cv', resource_type='raw')
    