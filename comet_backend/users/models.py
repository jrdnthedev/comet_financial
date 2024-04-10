from django.db import models

class BankUser(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    accounts = models.JSONField(default=list)
    def __str__(self):
        return self.question_text
