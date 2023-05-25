from django.db import models
from django.core.files.base import ContentFile
import base64

# Create your models here.

class Product(models.Model):

	active = models.BooleanField(default=False)

	base_unit_price = models.FloatField()

	# is html
	description = models.TextField()
	description_fr = models.TextField(null=True, blank=True)
	detailed_type = models.TextField()
	display_name = models.TextField()
	main_picture = models.CharField(max_length=255)
	list_price = models.FloatField()
	name = models.TextField()
	name_fr = models.TextField(null=True, blank=True)
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
	classic = models.BooleanField(default=True)
	
	def __str__(self):
		return self.name
	

class ProductAttribute(models.Model):

	products = models.ManyToManyField(Product, related_name="attributes")

	name = models.TextField()
	name_fr = models.TextField(null=True, blank=True)
	display_name = models.TextField()

	visibility = models.CharField(max_length=64)

	odoo_id = models.IntegerField(default=0)

	def __str__(self):
		return self.name
	

class ProductAttributeValue(models.Model):

	attribute = models.ForeignKey(ProductAttribute, related_name="values", on_delete=models.CASCADE)
	products = models.ForeignKey(Product, related_name="attributes_values", on_delete=models.CASCADE)

	name = models.TextField()
	name_fr = models.TextField(null=True, blank=True)
	display_name = models.TextField()
	price_extra = models.FloatField()

	odoo_id = models.IntegerField(default=0)

	def __str__(self):
		return f"{self.attribute.name}: {self.name}"
	

class ProductVariant(models.Model):
	product = models.ForeignKey(Product, related_name="variants", on_delete=models.CASCADE)

	list_price = models.FloatField()
	odoo_id = models.IntegerField(default=0)
	attributes_values = models.ManyToManyField(ProductAttributeValue, related_name="variants")

	description = models.TextField(blank=True, null=True)
	description_fr = models.TextField(null=True, blank=True)

	name_fr = models.TextField(null=True, blank=True)
	display_name = models.TextField(blank=True, null=True)

	def __str__(self):
		values = self.attributes_values.all()
		values = [i.name for i in values]
		return f"{self.product.name}: {values}"
	

class ProductImage(models.Model):
	product = models.ForeignKey(ProductVariant, related_name="images", on_delete=models.CASCADE)
	image = models.ImageField(upload_to='product_images/', blank=True, null=True)

	def load_image(self, image_bytes):
		if not image_bytes:
			return
		image_name = self.product.product.name.replace(" ", "_").lower()
		self.image.save(f"{image_name}.png", ContentFile(base64.b64decode(image_bytes)))
		self.save()

	def __str__(self):
		return self.product.product.name + "'s image"