
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from .serializers import ProductVariantSerializer
from .models import Product, ProductVariant

@api_view(["GET"])
def products(request):
	if request.method == "GET":
		products = Product.objects.filter(classic=True)

		product_list = []
		for product in products:
			variant = ProductVariant.objects.filter(product=product).first()
			if variant is None:
				continue
			product_data = {
				"name": product.name,
				"description": product.description,
				"variants": [
					ProductVariantSerializer(variant, many=False).data
				]
			}
			product_list.append(product_data)
		
		return JsonResponse(product_list, safe=False, status=status.HTTP_200_OK)