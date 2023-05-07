from django.urls import include, path
from orders import api_views as orders_views
from users import api_views as users_views
from products import api_views as products_views
from admin_api import api_views as admin_views
 
urlpatterns = [ 
    path('basket/product/<int:product_id>', orders_views.product_to_basket),
    path('basket', orders_views.basket),
    path('basket/promo-code', orders_views.promo_code),

    #products
    path('products', products_views.products),
    path('products/<int:odoo_id>', products_views.product),

    #auth
    path('auth/login', users_views.login),
    path('auth/register', users_views.register),

    #me
    path('me/profile', users_views.profile),

    #admin
    path('admin/products', admin_views.products),
    path('admin/products/attributes', admin_views.products_attributes),
    path('admin/products/variants', admin_views.products_variants),
]