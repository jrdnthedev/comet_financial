from django.shortcuts import render
from django.http import JsonResponse
# from django.contrib.auth.models import BankUser

def index(request, user_id):
    return JsonResponse({"user route"})

            