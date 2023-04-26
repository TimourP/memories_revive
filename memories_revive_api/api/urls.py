from django.urls import include, path
from orders import api_views as orders_views
from users import api_views as users_views
from products import api_views as products_views
 
urlpatterns = [ 
    path('basket/product/<int:product_id>', orders_views.product_to_basket),
    path('basket', orders_views.basket),

    #products
    path('products', products_views.products),

    #auth
    path('auth/login', users_views.login),
    path('auth/register', users_views.register),
]