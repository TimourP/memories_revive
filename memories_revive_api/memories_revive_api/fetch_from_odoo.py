from memories_revive_api.main_functions import odoo
from products.models import Product

def fetch_products():
    odoo_products = odoo("product.template", "search_read", [[["is_published", "=", True]]], {"fields": ["is_published", "name", "description", "type", "sale_ok", "purchase_ok", "active"]})
    for product in odoo_products:
        existing = Product.objects.filter(odoo_id=product["id"])
        if existing.exists():
            existing = existing[0]
            existing.save()
        else:
            Product.objects.create(name=product["name"], odoo_id=product["id"], description=product["description"], is_published=product["is_published"], product_type=product["type"], sale_ok=product["sale_ok"], purchase_ok=product["purchase_ok"], active=product["active"])


if __name__ == "__main__":
    fetch_products()