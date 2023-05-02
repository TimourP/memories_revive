
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from .serializers import ProductSerializer
from .models import Product, ProductVariant

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def products(request):
	if request.method == "GET":
		products = Product.objects.all()

		product_list = []
		for product in products:
			variant = ProductVariant.objects.filter(product=product).first()
			if variant is None:
				continue
			product_data = {
				"name": product.name,
				"description": product.description,
				"main_image": f"https://edu-beerg1.odoo.com/web/image/product.product/{variant.odoo_id}/image_1024",
				"price": variant.list_price,
			}
			print(product_data)
			product_list.append(product_data)
			break
		
		return JsonResponse(product_list, safe=False, status=status.HTTP_200_OK)