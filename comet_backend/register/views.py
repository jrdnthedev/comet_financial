import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from users.models import BankUser

@csrf_exempt
def registerUser(request):
    
    if request.method == 'POST':
        data = json.loads(request.body)
        # Query the database for the user
        existing_user = BankUser.objects.filter(email=data.get('email')).exists()

        if existing_user:
            return JsonResponse({"error": "User with this email already exists"}, status=400)
            
        new_user = BankUser.objects.create(
            email=data.get('email'),
            password=data.get('password'),
            firstName=data.get('firstName'),
            lastName=data.get('lastName'),
        )
        
        return JsonResponse({'message': 'User registered successfully'}, status=201)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)