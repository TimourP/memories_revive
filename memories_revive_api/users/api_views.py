
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from api.custom_decorators import check_json
from api.helper import check_dict_values_type
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Profile
from orders.models import Order
import random
import string

def generate_random_string(length):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))


def check_previous_user(prev_user_key, user):
	token = ""
	try:
		token = Token.objects.get(key=prev_user_key)
	except:
		token = ""
	if token == "":
		return
	prev_user = User.objects.get(pk=token.user_id)
	if not prev_user.profile.is_guest:
		return
	prev_order = Order.objects.filter(state="draft", profile=prev_user.profile)

	open_order = Order.objects.filter(state="draft", profile=user.profile)
	if open_order.exists():
		open_order = open_order.first()
	else:
		open_order = prev_order[0]
		open_order.profile = user.profile
		open_order.save()
	prev_user.delete()

@api_view(["POST"])
@check_json(err_message="json object is required")
def login(request, data):
	if request.method == "POST":
		login_data = {
			"email": data.get("email"),
			"password": data.get("password"),
			"token": data.get("token"),
		}
		valid = check_dict_values_type(login_data, [str, str, str], [False, False, True])
		if not valid[0]:
			return JsonResponse({"detail": valid[1]}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		user = authenticate(username=login_data["email"], password=login_data["password"])		

		if user is not None:
			token, created = Token.objects.get_or_create(user=user)
			check_previous_user(login_data["token"], user)
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
@permission_classes([IsAuthenticated])
def profile(request):
	if request.method == "POST":
		return JsonResponse({
				"first_name": request.user.profile.first_name,
				"last_name": request.user.profile.last_name,
				"email": request.user.profile.email,
				"is_guest": request.user.profile.is_guest
			}, safe=False, status=status.HTTP_200_OK)
	

@api_view(["POST"])
@check_json(err_message="json object is required")
def register(request, data):
	if request.method == "POST":
		login_data = {
			"last_name": data.get("last_name"),
			"first_name": data.get("first_name"),
			"email": data.get("email"),
			"password": data.get("password"),
			"token": data.get("token"),
		}
		valid = check_dict_values_type(login_data, [str, str, str, str, str], [False, False, False, False, True])
		if not valid[0]:
			return JsonResponse({"detail": valid[1]}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		
		user = User.objects.create(
			first_name=login_data["first_name"],
			last_name=login_data["last_name"],
			email=login_data["email"],
			username=login_data["email"],
		)
		user.set_password(login_data["password"])
		user.save()
		Token.objects.create(user=user)
		p = Profile.objects.create(
			user=user,
			first_name=login_data["first_name"],
			last_name=login_data["last_name"],
			email=login_data["email"],
		)
		return JsonResponse("ok", safe=False, status=status.HTTP_200_OK)
	
@api_view(["POST"])
def guest(request):
	if request.method == "POST":
		user_name = generate_random_string(32)
		user = User.objects.create(
			first_name="guest",
			last_name="user",
			email=f"{user_name}@memoriesrevive.com",
			username=user_name,
			password="hello"
		)
		user.save()
		t = Token.objects.create(user=user)
		p = Profile.objects.create(
			user=user,
			first_name="guest",
			last_name="user",
			email=f"{user_name}@memoriesrevive.com",
			is_guest=True
		)
		return JsonResponse({"key": t.key}, safe=False, status=status.HTTP_200_OK)