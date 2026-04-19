from django.db import models

# Create your models here.
class Blog(models.Model):
    Title=models.CharField(max_length=100)
    Image=models.ImageField()
    Description=models.CharField()
    Created_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.Title