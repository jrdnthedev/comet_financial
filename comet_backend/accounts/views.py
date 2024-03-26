from django.shortcuts import render
from django.http import JsonResponse
from .models import Account

def index(request):
    accounts = [{"id": 1, "type": 'savings', "balance": 100000, "transactions": [123,3442,4234,45354,65,543,233,34]},{"id": 2, "type": 'checking', "balance": 45000, "transactions": [123,3442,4234,45354,65,543,233,34]},{"id": 3, "type": 'tsfa', "balance": 10400, "transactions": [123,3442,4234,45354,65,543,233,34]}]
    # data = [{"id": account.id, "type": account.type, "balance": account.balance, "transactions": account.transactions} for account in accounts]
    return JsonResponse(accounts,safe=False)

