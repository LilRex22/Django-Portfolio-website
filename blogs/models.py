from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.
class Blog(models.Model):
    Title=models.CharField(max_length=100)
    Image=CloudinaryField('image', resource_type='image', folder='blog')
    Description=models.CharField(max_length=500)
    Created_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.Title