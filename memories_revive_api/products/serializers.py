from rest_framework import serializers
from .models import Product, ProductVariant

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = ('id', 'name', 'description', 'odoo_id', 'is_published', 'sale_ok', 'purchase_ok', 'active', 'product_type')

class ProductVariantSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductVariant
		depth = 1
		fields = ('id', 'list_price', 'images', "odoo_id")