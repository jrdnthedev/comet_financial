from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    transactions = 'transaction route'
    # data = [{"id": account.id, "type": account.type, "balance": account.balance, "transactions": account.transactions} for account in accounts]
    return JsonResponse(transactions,safe=False)
