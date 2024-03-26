from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.

class Account(models.Model):
    id = models.CharField(max_length=30,primary_key=True)
    type = models.CharField(max_length=30)
    balance = models.IntegerField()
    transactions = ArrayField(models.IntegerField())
    def __str__(self):
        return self.question_text