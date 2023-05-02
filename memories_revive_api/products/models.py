from django.db import models

# Create your models here.

class Product(models.Model):

	active = models.BooleanField(default=False)

	base_unit_price = models.FloatField()

	# is html
	description = models.TextField()
	detailed_type = models.TextField()
	display_name = models.TextField()
	main_picture = models.CharField(max_length=255)
	list_price = models.FloatField()
	name = models.TextField()
	produce_delay = models.FloatField()
	product_tooltip = models.TextField()
	product_type = models.CharField(max_length=128, default="")

	purchase_ok = models.BooleanField(default=False)
	is_published = models.BooleanField(default=False)
	sale_ok = models.BooleanField(default=False)

	qty_available = models.FloatField()
	rating_avg = models.FloatField()
	rating_count = models.IntegerField()

	sale_delay = models.FloatField()
	
	odoo_id = models.IntegerField(default=0)
	
	def __str__(self):
		return self.name
	
class ProductVariant(models.Model):
	product = models.ForeignKey(Product, related_name="variants", on_delete=models.CASCADE)

	list_price = models.FloatField()
	odoo_id = models.IntegerField(default=0)


class ProductImage(models.Model):
	product = models.ForeignKey(Product, related_name="images", on_delete=models.CASCADE)
	display_name = models.CharField(max_length=255)
	image = models.CharField(max_length=255)
	video_url = models.CharField(max_length=255, blank=True, null=True)

	def __str__(self):
		return self.product.name + "'s image"
	

class ProductAttribute(models.Model):

	products = models.ManyToManyField(Product, related_name="attributes")

	name = models.TextField()
	display_name = models.TextField()

	visibility = models.CharField(max_length=64)

	odoo_id = models.IntegerField(default=0)

	def __str__(self):
		return self.name


class ProductAttributeValue(models.Model):

	attribute = models.ForeignKey(ProductAttribute, related_name="values", on_delete=models.CASCADE)
	products = models.ForeignKey(Product, related_name="attributes_values", on_delete=models.CASCADE)

	name = models.TextField()
	display_name = models.TextField()
	price_extra = models.FloatField()

	odoo_id = models.IntegerField(default=0)

	def __str__(self):
		return f"{self.attribute.name}: {self.name}"