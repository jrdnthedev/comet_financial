import json
from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import jwt
import os



@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        token_key = os.environ.get('TOKEN_KEY')
        # Authenticate user, e.g., check username and password
        if data.get('username') == 'admin' and data.get('password') == 'admin':
            token = jwt.encode({'username': 'admin'}, str(token_key), algorithm='HS256')
            return JsonResponse({'token': token}, status=200)
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=401)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)
