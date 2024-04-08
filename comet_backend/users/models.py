from django.db import models
from django.contrib.postgres.fields import ArrayField

class User(models.Model):
    id = models.CharField(max_length=30,primary_key=True)
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    accounts = ArrayField(models.IntegerField())
    def __str__(self):
        return self.question_text
