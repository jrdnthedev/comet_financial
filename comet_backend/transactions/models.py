from django.db import models
from accounts.models import Account

class Transaction(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, default=0)
    type = models.CharField(max_length=30)
    amount = models.IntegerField()
    date = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
    def __str__(self):
        return self.question_text
