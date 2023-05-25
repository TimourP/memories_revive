
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from .serializers import ProductVariantSerializer, ProductVariantFullSerializer, AttributeSerializer
from .models import Product, ProductVariant
import time

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
	

@api_view(["GET"])
def main_product(request):
	if request.method == "GET":
		product = Product.objects.filter(classic=False)
		if not product.exists():
			return JsonResponse({"details": "not found"}, safe=False, status=status.HTTP_404_NOT_FOUND)

		linked_product = product[0]

		product_data = {
			"name": linked_product.name,
			"description": linked_product.description,
			"variants": ProductVariantFullSerializer(linked_product.variants, many=True).data,
			"attributes": AttributeSerializer(linked_product.attributes, many=True).data
		}
		return JsonResponse(product_data, safe=False, status=status.HTTP_200_OK)
	
@api_view(["GET"])
def product(request, odoo_id):
	if request.method == "GET":
		variant = ProductVariant.objects.filter(odoo_id=odoo_id)
		if not variant.exists():
			return JsonResponse({"details": "not found"}, safe=False, status=status.HTTP_404_NOT_FOUND)
		
		variant = variant[0]
		linked_product = variant.product

		product_data = {
			"name": linked_product.name,
			"description": linked_product.description,
			"variants": ProductVariantFullSerializer(linked_product.variants, many=True).data,
			"attributes": AttributeSerializer(linked_product.attributes, many=True).data
		}

		return JsonResponse(product_data, safe=False, status=status.HTTP_200_OK)
