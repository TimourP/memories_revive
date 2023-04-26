from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = ('id', 'name', 'description', 'odoo_id', 'is_published', 'sale_ok', 'purchase_ok', 'active', 'product_type')