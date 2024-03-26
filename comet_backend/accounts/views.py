from django.shortcuts import render
from django.http import JsonResponse
from .models import Account

def index(request):
    accounts = Account.objects.all()
    data = [{"id": account.id, "type": account.type, "balance": account.balance, "transactions": account.transactions} for account in accounts]
    return JsonResponse(data,safe=False)

