
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from api.custom_decorators import check_json
from api.helper import check_dict_values_type
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

@api_view(["POST"])
@check_json(err_message="json object is required")
def login(request, data):
	if request.method == "POST":
		login_data = {
			"email": data.get("email"),
			"password": data.get("password")
		}
		valid = check_dict_values_type(login_data, [str, str])
		if not valid[0]:
			return JsonResponse({"detail": valid[1]}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		user = authenticate(username=login_data["email"], password=login_data["password"])
		token, created = Token.objects.get_or_create(user=user)

		if user is not None:
			return JsonResponse({
				"user": {
					"first_name": user.profile.first_name,
					"last_name": user.profile.last_name,
					"email": user.profile.email,
				},
				"token": token.key
			}, safe=False, status=status.HTTP_200_OK)
		else:
			return JsonResponse({"details": "Unable to log in with provided credentials."}, safe=False, status=status.HTTP_400_BAD_REQUEST)
	

@api_view(["POST"])
@check_json(err_message="json object is required")
def register(request, data):
	if request.method == "POST":
		login_data = {
			"name": data.get("name"),
			"email": data.get("email"),
			"password": data.get("password")
		}
		valid = check_dict_values_type(login_data, [str, str, str])
		if not valid[0]:
			return JsonResponse({"detail": valid[1]}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		
		return JsonResponse("hello", safe=False, status=status.HTTP_200_OK)