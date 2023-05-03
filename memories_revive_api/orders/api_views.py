
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.http.response import JsonResponse
from .models import Order, OrderLine
from products.models import Product, ProductVariant
from .serializers import OrderSerializer
from memories_revive_api.main_functions import odoo
import json

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def basket(request):
	if request.method == "GET":
		open_order = Order.objects.filter(state="draft")
		if open_order.exists():
			open_order = open_order.first()
		else:
			return JsonResponse({"detail": "no open basket"}, safe=False, status=status.HTTP_404_NOT_FOUND)
		basket_serializer = OrderSerializer(open_order, many=False)
		return JsonResponse(basket_serializer.data, safe=False, status=status.HTTP_200_OK)
	

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def promo_code(request):
	if request.method == "POST":
		open_order = Order.objects.filter(state="draft")
		if open_order.exists():
			open_order = open_order.first()
		else:
			return JsonResponse({"detail": "no open basket"}, safe=False, status=status.HTTP_404_NOT_FOUND)
		res = odoo("sale.order.line", "search_read", [[["order_id", "=", 79]]])

		print(json.dumps(res[1], indent=4))
		return JsonResponse("ok", safe=False, status=status.HTTP_200_OK)



@api_view(["POST", "DELETE"])
@permission_classes([IsAuthenticated])
def product_to_basket(request, product_id):
	if request.method == "POST":

		product = ProductVariant.objects.filter(odoo_id=product_id)
		if not product.exists():
			return JsonResponse({"detail": "product does't exist"}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		product = product.first()

		open_order = Order.objects.filter(state="draft")
		if open_order.exists():
			open_order = open_order.first()
		else:
			open_order = Order.objects.create(name="start", profile=request.user.profile)
		
		line = open_order.lines.filter(product=product)
		if line.exists():
			line = line[0]
			line.quantity += 1
			line.save()
		else:
			line = OrderLine.objects.create(product=product, order=open_order)
		return JsonResponse({"detail": "ok"}, safe=False, status=status.HTTP_200_OK)

	elif request.method == "DELETE":
		product = ProductVariant.objects.filter(odoo_id=product_id)
		if not product.exists():
			return JsonResponse({"detail": "product does't exist"}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		product = product.first()

		open_order = Order.objects.filter(state="draft")
		if open_order.exists():
			open_order = open_order.first()
		else:
			return JsonResponse({"detail": "no open basket"}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		
		line = open_order.lines.filter(product=product)
		if line.exists():
			line = line[0]
			line.quantity -= 1
			line.save()
			if line.quantity == 0:
				line.delete()
		else:
			return JsonResponse({"detail": "not present in basket"}, safe=False, status=status.HTTP_400_BAD_REQUEST)
		return JsonResponse({"detail": "ok"}, safe=False, status=status.HTTP_200_OK)