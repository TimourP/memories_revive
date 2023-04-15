from django.shortcuts import render, HttpResponse
from memories_revive_api.fetch_from_odoo import fetch_products
# Create your views here.


def base(request):
    fetch_products()
    return HttpResponse("Hello")