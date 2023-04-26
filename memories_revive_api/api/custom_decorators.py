from rest_framework import status
from django.http.response import JsonResponse
import json

def check_json(methods=[], err_message="Admin authorization required."):
	def decorator(view_function):
		def decorated_function(request, *args, **kwargs):
			if not request.body:
				return JsonResponse({"detail": err_message}, status=status.HTTP_400_BAD_REQUEST)
			try:
				data = json.loads(request.body)
			except json.decoder.JSONDecodeError:
				return JsonResponse({"detail": "malformed json"}, status=status.HTTP_400_BAD_REQUEST)
			kwargs["data"] = data
			return view_function(request, *args, **kwargs)
		return decorated_function
	return decorator