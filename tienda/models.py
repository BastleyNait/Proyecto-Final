from django.db import models
from django.contrib.auth.models import User
from tienda.signals import (
    product_updated,
    category_updated,
    order_updated,
    customer_updated,
)
from tienda.middleware import get_current_request

class Category(models.Model):
    nombre = models.CharField(max_length=100,unique=True)
    id_categoria = models.CharField(max_length=100)
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    modify_date = models.DateTimeField(auto_now=True,editable=False)
    status = models.BooleanField(default=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, to_field='id', null=True, blank=True, editable=False)

    def __str__(self):
        return self.nombre

def update_category_user_id(sender, instance, **kwargs):
    request = get_current_request()
    user = request.user if request and request.user.is_authenticated else None
    if user:
        instance.user_id = user.id

category_updated.connect(update_category_user_id, sender=Category)

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    image_url = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE,to_field='nombre')
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    modify_date = models.DateTimeField(auto_now=True,editable=False)
    status = models.BooleanField(default=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, to_field='id', null=True, blank=True, editable=False)

    def __str__(self):
        return f"nombre: {self.name} categoria: {self.category}"

def update_product_user_id(sender, instance, **kwargs):
    request = get_current_request()
    user = request.user if request and request.user.is_authenticated else None
    if user:
        instance.user_id = user.id

product_updated.connect(update_product_user_id, sender=Product)

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shipping_address = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    modify_date = models.DateTimeField(auto_now=True,editable=False)
    status = models.BooleanField(default=True)
    # Agrega cualquier otro campo adicional que desees para el perfil del cliente
    def __str__(self):
        return self.user.username

def update_customer_user_id(sender, instance, **kwargs):
    request = get_current_request()
    user = request.user if request and request.user.is_authenticated else None
    if user:
        instance.user_id = user.id

customer_updated.connect(update_customer_user_id, sender=Customer)

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    items = models.ManyToManyField(Product, through='OrderItem')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.BooleanField(default=True)
    created_date = models.DateTimeField(auto_now_add=True, editable=False)
    modify_date = models.DateTimeField(auto_now_add=True, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, to_field='id', null=True, blank=True, editable=False)

def update_order_user_id(sender, instance, **kwargs):
    request = get_current_request()
    user = request.user if request and request.user.is_authenticated else None
    if user:
        instance.user_id = user.id

order_updated.connect(update_order_user_id, sender=Order)

class OrderItem(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE,to_field='id')
    order = models.ForeignKey(Order, on_delete=models.CASCADE,to_field='id')
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    

