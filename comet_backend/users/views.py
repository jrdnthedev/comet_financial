from django.shortcuts import render
from enum import Enum
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
import datetime
import json

class AccountType(Enum):
    Checking = 'checking'
    Savings = 'savings'
    CreditCard = 'credit card'
    TSFA = 'tsfa'
    HighIinterestSavings = 'high interest savings'

class TransactionType(Enum):
    Deposit = 'deposit'
    Withdrawal = 'withdrawal'
    Transfer = 'transfer'
    Payment = 'payment'
    
class AccountTypeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, AccountType):
            return obj.value
        return json.JSONEncoder.default(self, obj)
    
class TransactionTypeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, TransactionType):
            return obj.value
        return json.JSONEncoder.default(self, obj)

users = [{
        'id': 0,
        'firstName': "admin",
        'lastName': "admin",
        'email': "example.com",
        'password': "password",
        'accounts': [
            {
                'id': 0,
                'type': json.dumps(AccountType.Savings, cls=AccountTypeEncoder),
                'balance': 1000000,
                'number': 2342342434325,
                'transactions': [
                    {
                    'id': 1,
                    'type': json.dumps(TransactionType.Deposit, cls=TransactionTypeEncoder),
                    'amount': 250000,
                    'date': datetime.datetime(2024,1,17),
                    'description': "Deposit made",
                    },
                    {
                    'id': 2,
                    'type': json.dumps(TransactionType.Transfer, cls=TransactionTypeEncoder),
                    'amount': 250000,
                    'date': datetime.datetime(2024,1,19),
                    'description': "Transfer made",
                    },
                    {
                    'id': 3,
                    'type': json.dumps(TransactionType.Transfer, cls=TransactionTypeEncoder),
                    'amount': 250000,
                    'date': datetime.datetime(2024,1,20),
                    'description': "Transfer made",
                    },
                    {
                    'id': 4,
                    'type': json.dumps(TransactionType.Deposit, cls=TransactionTypeEncoder),
                    'amount': 250000,
                    'date': datetime.datetime(2024,1,21),
                    'description': "Deposit made",
                    },
                ],
            },
            {
            'id': 1,
            'type': json.dumps(AccountType.Checking, cls=AccountTypeEncoder),
            'balance': 100000,
            'number': 2349082434545,
            'transactions': [
                {
                'id': 1,
                'type': json.dumps(TransactionType.Payment, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,3,10),
                'description': "Payment made",
                },
                {
                'id': 2,
                'type': json.dumps(TransactionType.Payment, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,3,13),
                'description': "Payment made",
                },
                {
                'id': 3,
                'type': json.dumps(TransactionType.Withdrawal, cls=TransactionTypeEncoder),
                'amount': 192.0,
                'date': datetime.datetime(2024,3,14),
                'description': "Withdrawal made",
                },
                {
                'id': 4,
                'type': json.dumps(TransactionType.Deposit, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,3,25),
                'description': "Deposit made",
                },
                {
                'id': 5,
                'type': json.dumps(TransactionType.Deposit, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,3,27),
                'description': "Deposit made",
                },
            ],
            },
            {
            'id': 2,
            'type': json.dumps(AccountType.TSFA, cls=AccountTypeEncoder),
            'balance': 100000,
            'number': 2342832439695,
            'transactions': [
                {
                'id': 1,
                'type': json.dumps(TransactionType.Deposit, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,1,17),
                'description': "Deposit made",
                },
                {
                'id': 2,
                'type': json.dumps(TransactionType.Payment, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,1,20),
                'description': "Payment made",
                },
                {
                'id': 3,
                'type': json.dumps(TransactionType.Transfer, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,1,23),
                'description': "Transfer made",
                },
                {
                'id': 4,
                'type': json.dumps(TransactionType.Deposit, cls=TransactionTypeEncoder),
                'amount': 25000,
                'date': datetime.datetime(2024,2,24),
                'description': "Deposit made",
                },
            ]
            }
        ],
    }]

def index(request, user_id):
    user = next((user for user in users if user["id"] == user_id), None)
    
    if user:
        return JsonResponse(user)
    else:
        return JsonResponse({"error": "User not found"}, status=404)

            