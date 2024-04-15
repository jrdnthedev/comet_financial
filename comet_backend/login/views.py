import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import jwt
import os

from users.models import BankUser

@csrf_exempt
def login(request):
    print(request.body)
    if request.method == 'POST':
        data = json.loads(request.body)
        token_key = os.environ.get('TOKEN_KEY')
        # Query the database for the user
        try:
            user = BankUser.objects.get(email=data.get('username'), password=data.get('password'))
            user_data = {
                'id': user.id,
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'accounts': user.accounts,
            }
            # Authenticate user, e.g., check username and password
            if data.get('username') == user.email and data.get('password') == user.password:
                token = jwt.encode({'username': 'admin'}, str(token_key), algorithm='HS256')
                return JsonResponse({'token': token,'user':user_data}, status=200)
            else:
                return JsonResponse({'message': 'Invalid credentials'}, status=401)
        except BankUser.DoesNotExist:
            # Return error message if user is not found
            return JsonResponse({'error': 'Invalid email or password'}, status=400)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)

# add hash function for password
# write unit tests
# add register user component
# save data to db