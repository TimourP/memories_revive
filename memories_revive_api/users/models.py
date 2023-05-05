from django.db import models
from django.contrib.auth.models import User
from memories_revive_api.main_functions import odoo

# Create your models here.

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

	first_name = models.CharField(max_length=128, default="")
	last_name = models.CharField(max_length=128, default="")
	email = models.CharField(max_length=128, default="")

	odoo_id = models.IntegerField(default=0)
	
	# payments
	business_name = models.CharField(max_length=100, blank=True)
	business_number = models.CharField(max_length=100, blank=True)
	billing_address_country = models.CharField(max_length=2, blank=True)
	billing_address_address_l1 = models.CharField(max_length=100, blank=True)
	billing_address_address_l2 = models.CharField(max_length=100, blank=True)
	billing_address_postal_code = models.CharField(max_length=100, blank=True)
	billing_address_city = models.CharField(max_length=100, blank=True)
	
	def save(self, *args, **kwargs):
		if not self.pk:
			# This code only happens if the objects is
			# not in the database yet. Otherwise it would
			# have pk
			partner_data = {
				'name': f"{self.first_name} {self.last_name}",
				"email": self.email,
				'country_id': 20,
			}
			
			res = odoo("res.partner", "create", [partner_data])

			user_data = {
				'name': f"{self.first_name} {self.last_name}",
				'login': self.email,
				'email': self.email,
				'password': "Django07",
				'partner_id': res,
			}

			res = odoo("res.users", "create", [user_data])

			self.odoo_id = res
			super(Profile, self).save(*args, **kwargs)
		else:
			super(Profile, self).save(*args, **kwargs)
	
	def __str__(self):
		return self.user.username + "'s profile"