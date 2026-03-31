from django.db import models

# Create your models here.
class Project(models.Model):
    Image = models.ImageField()
    Name = models.CharField(max_length=100)
    Description = models.TextField()
    Tech_stack1 = models.ImageField(null=True, blank=True)
    Tech_stack2 = models.ImageField(null=True, blank=True)
    Tech_stack3 = models.ImageField(null=True, blank=True)
    Link = models.CharField(max_length=255)
    Github = models.CharField(null=True, blank=True)
    
    
    def __str__(self):
        return self.Name