import json
from django.db import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import jwt

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Authenticate user, e.g., check username and password
        if data.get('username') == 'admin' and data.get('password') == 'admin':
            token = jwt.encode({'username': 'admin'}, '8efd0652d178750527e69a1a7c4ee830aa9ac3288c15465097297963b8d34bc8', algorithm='HS256')
            return JsonResponse({'token': token}, status=200)
        else:
            return JsonResponse({'message': 'Invalid credentials'}, status=401)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)
