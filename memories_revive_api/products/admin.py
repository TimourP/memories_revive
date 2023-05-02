from django.contrib import admin
from .models import Product, ProductAttribute, ProductAttributeValue, ProductVariant
# Register your models here.

admin.site.register(ProductAttributeValue)
admin.site.register(ProductAttribute)
admin.site.register(ProductVariant)
admin.site.register(Product)