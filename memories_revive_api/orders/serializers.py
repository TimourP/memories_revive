from rest_framework import serializers
from .models import Order, OrderLine
from products.models import ProductVariant

class ProductVariantSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductVariant
		depth = 1
		fields = ['id', 'list_price', "odoo_id", "display_name", "images", "attributes_values"]

class OrderLineSerializer(serializers.ModelSerializer):

	product = ProductVariantSerializer(many=False)

	class Meta:
		model = OrderLine
		fields = ["product", "quantity"]

class OrderSerializer(serializers.ModelSerializer):
	lines = OrderLineSerializer(many=True)

	class Meta:
		model = Order
		fields = ['id', 'lines']