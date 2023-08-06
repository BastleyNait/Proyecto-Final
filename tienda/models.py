from datetime import datetime
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    nombre = models.CharField(max_length=100,unique=True)
    id_categoria = models.CharField(max_length=100)
    def __str__(self):
        return self.nombre

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    image_url = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE,to_field='nombre')
    created_date = models.DateTimeField(default=datetime.now)
    modify_date = models.DateTimeField(default=datetime.now)
    status = models.BooleanField(default=True)

    def __str__(self):
        return f"nombre: {self.name} categoria: {self.category}"

class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shipping_address = models.TextField()
    # Agrega cualquier otro campo adicional que desees para el perfil del cliente
    def __str__(self):
        return self.user_data.username

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    items = models.ManyToManyField(Product, through='OrderItem')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)

class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

