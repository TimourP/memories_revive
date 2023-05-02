
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from django.http.response import JsonResponse
from products.models import Product, ProductAttribute, ProductAttributeValue
from memories_revive_api.main_functions import odoo
import json

@api_view(["POST"])
@permission_classes([IsAdminUser])
def products(request):
	if request.method == "POST":

		odoo_products = odoo("product.template", "search_read", [[["sale_ok", "=", True]]], {"fields": 
							       [
								       "active", 
									   "base_unit_price", 
									   "description", 
									   "detailed_type",
									   "display_name",
									   "list_price",
									   "name",
									   "produce_delay",
									   "product_tooltip",
									   "type",
									   "purchase_ok",
									   "is_published",
									   "sale_ok",
									   "qty_available",
									   "rating_avg",
									   "rating_count",
									   "sale_delay",
									   "is_published",
									#    "product_tmpl_id",
									#    "product_template_variant_value_ids"
									]
							})

		for product in odoo_products:
			# images = odoo("product.image", "search_read", [[["product_tmpl_id", "=", product["id"]]]], {"fields": ["video_url"]})
			# print(product["id"], product["name"], images)
			existing = Product.objects.filter(odoo_id=product["id"])
			if existing.exists():
				existing = existing[0]
				existing.active = product["active"]
				existing.base_unit_price = product["base_unit_price"]
				existing.description = product["description"]
				existing.detailed_type = product["detailed_type"]
				existing.display_name = product["display_name"]
				existing.list_price = product["list_price"]
				existing.name = product["name"]

				existing.produce_delay = product["produce_delay"]
				existing.product_tooltip = product["product_tooltip"]
				existing.product_type = product["type"]
				existing.purchase_ok = product["purchase_ok"]
				existing.is_published = product["is_published"]
				existing.sale_ok = product["sale_ok"]
				existing.qty_available = product["qty_available"]
				existing.rating_avg = product["rating_avg"]
				existing.rating_count = product["rating_count"]
				existing.sale_delay = product["sale_delay"]
				existing.save()
			else:
				Product.objects.create(
					active=product["active"], 
					base_unit_price=product["base_unit_price"], 
					description=product["description"], 
					detailed_type=product["detailed_type"], 
					display_name=product["display_name"], 
					list_price=product["list_price"], 
					name=product["name"], 
					produce_delay=product["produce_delay"], 
					product_tooltip=product["product_tooltip"], 
					product_type=product["type"], 
					purchase_ok=product["purchase_ok"], 
					is_published=product["is_published"], 
					sale_ok=product["sale_ok"], 
					qty_available=product["qty_available"], 
					rating_avg=product["rating_avg"], 
					rating_count=product["rating_count"], 
					sale_delay=product["sale_delay"], 
					odoo_id=product["id"],
				)
		
		return JsonResponse("hello", safe=False, status=status.HTTP_200_OK)
	

@api_view(["POST"])
@permission_classes([IsAdminUser])
def products_attributes(request):
	if request.method == "POST":
		odoo_products_attr = odoo("product.attribute", "search_read", [], {})

		for attribute in odoo_products_attr:
			existing = ProductAttribute.objects.filter(odoo_id=attribute["id"])
			if existing.exists():
				existing = existing[0]
				existing.name = attribute["name"]
				existing.display_name = attribute["display_name"]
				existing.visibility = attribute["visibility"]
			else:
				ProductAttribute.objects.create(
					name=attribute["name"],
					display_name=attribute["display_name"],
					visibility=attribute["visibility"],
					odoo_id=attribute["id"],
				)

		odoo_products_attr_values = odoo("product.template.attribute.value", "search_read", [], {})

		for attribute_value in odoo_products_attr_values:
			existing = ProductAttributeValue.objects.filter(odoo_id=attribute_value["id"])
			if existing.exists():
				existing = existing[0]
				existing.name = attribute_value["name"]
				existing.display_name = attribute_value["display_name"]
				existing.price_extra = attribute_value["price_extra"]
			else:
				existing = ProductAttribute.objects.filter(odoo_id=attribute_value["attribute_id"][0])
				if not existing.exists():
					continue
				product_template = Product.objects.filter(odoo_id=attribute_value["product_tmpl_id"][0])
				if not product_template.exists():
					continue
				existing[0].products.add(product_template[0])
				ProductAttributeValue.objects.create(
					name=attribute_value["name"],
					attribute=existing[0],
					products=product_template[0],
					display_name=attribute_value["display_name"],
					price_extra=attribute_value["price_extra"],
					odoo_id=attribute_value["id"],
				)
		
		attributes = ProductAttribute.objects.all()
		for attribute in attributes:
			if attribute.products.count() == 0:
				attribute.delete()

		return JsonResponse("hello", safe=False, status=status.HTTP_200_OK)
	
@api_view(["POST"])
@permission_classes([IsAdminUser])
def products_variants(request):
	if request.method == "POST":
		return JsonResponse("hello", safe=False, status=status.HTTP_200_OK)