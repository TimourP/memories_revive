from django.urls import include, path
from orders import api_views as orders_views
 
urlpatterns = [ 
    path('basket/product/<int:product_id>/', orders_views.product_to_basket),
    path('basket/', orders_views.basket),
]