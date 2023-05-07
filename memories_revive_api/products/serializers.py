from rest_framework import serializers
from .models import Product, ProductVariant, ProductAttribute

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = ('id', 'name', 'description', 'odoo_id', 'is_published', 'sale_ok', 'purchase_ok', 'active', 'product_type')

class ProductVariantSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductVariant
		depth = 1
		fields = ('id', 'list_price', 'images', "odoo_id")

class AttributeSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductAttribute
		depth = 1
		fields = ('id', 'values', 'name', "odoo_id", "name_fr")


class ProductVariantFullSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductVariant
		depth = 1
		fields = ('id', 'list_price', 'images', "odoo_id", "attributes_values")