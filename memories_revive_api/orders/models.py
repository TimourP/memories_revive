from django.db import models
from users.models import Profile
from products.models import Product
from memories_revive_api.main_functions import odoo
import uuid

# Create your models here.

class Order(models.Model):

	profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='orders')

	name = models.CharField(max_length=255)
	odoo_id = models.IntegerField(default=0)
	state = models.CharField(default="draft", max_length=32)

	def save(self, *args, **kwargs):
		if not self.pk:
			# This code only happens if the objects is
			# not in the database yet. Otherwise it would
			# have pk
			partner_data = {
				'partner_id': self.profile.odoo_id,
				'access_token': str(uuid.uuid4())
			}
			res = odoo("sale.order", "create", [partner_data])
			self.odoo_id = res
			super(Order, self).save(*args, **kwargs)
		else:
			super(Order, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.name
	
class OrderLine(models.Model):
	order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='lines')
	product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='lines')
	quantity = models.IntegerField(default=1)

	odoo_id = models.IntegerField(default=0)

	def save(self, *args, **kwargs):
		if not self.pk:
			# This code only happens if the objects is
			# not in the database yet. Otherwise it would
			# have pk
			partner_data = {
				'product_id': self.product.odoo_id,
				'product_uom_qty': 1,
				'order_id': self.order.odoo_id
			}
			res = odoo("sale.order.line", "create", [partner_data])
			self.odoo_id = res
			super(OrderLine, self).save(*args, **kwargs)
		else:
			if self.quantity != 0:
				res = odoo("sale.order.line", "write", [[self.odoo_id], {'product_uom_qty': self.quantity}])
			else:
				res = odoo("sale.order.line", "unlink", [[self.odoo_id]])
			super(OrderLine, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.order.name