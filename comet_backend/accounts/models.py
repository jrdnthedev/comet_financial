from django.db import models
from users.models import BankUser

class Account(models.Model):
    user = models.ForeignKey(BankUser, on_delete=models.CASCADE, default=0)
    type = models.CharField(max_length=30)
    balance = models.IntegerField()
    transactions = models.JSONField(default=list)
    def __str__(self):
        return self.question_text