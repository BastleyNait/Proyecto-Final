from django.db import models

class Category(models.Model):
    nombre = models.CharField(max_length=100)
    id_categoria = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    image_url = models.URLField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


    def __str__(self):
        return f"nombre: {self.name} categoria: {self.category}"

class Customer(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    shipping_address = models.TextField()

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

