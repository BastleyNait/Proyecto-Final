from django.contrib import admin
from .models import Category, Product, Customer, Order

# Registrar los modelos en el panel de administración
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Order)
