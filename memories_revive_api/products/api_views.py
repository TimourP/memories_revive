
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from .serializers import ProductSerializer
from .models import Product

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def products(request):
	if request.method == "GET":
		products = Product.objects.all()
		
		products_serializer = ProductSerializer(products, many=True)
		return JsonResponse(products_serializer.data, safe=False, status=status.HTTP_200_OK)