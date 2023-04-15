from django.db import models

# Create your models here.

class Product(models.Model):

	name = models.TextField()
	description = models.TextField()
	
	odoo_id = models.IntegerField(default=0)

	is_published = models.BooleanField(default=False)
	sale_ok = models.BooleanField(default=False)
	purchase_ok = models.BooleanField(default=False)
	active = models.BooleanField(default=False)
	is_published = models.BooleanField(default=False)
	product_type = models.CharField(max_length=128, default="")
	
	def __str__(self):
		return self.name
		