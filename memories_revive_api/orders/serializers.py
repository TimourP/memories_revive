from rest_framework import serializers
from .models import Order, OrderLine

class OrderSerializer(serializers.ModelSerializer):
	class Meta:
		model = Order
		depth = 2
		fields = ['id', 'lines']