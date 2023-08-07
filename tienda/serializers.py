from rest_framework import serializers
from .models import Product, Category , Order , OrderItem

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'stock', 'image_url', 'category', 'created_date', 'modify_date', 'status')
        read_only_fields = ('created_date', 'modify_date', )

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('nombre',)

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'customer', 'items', 'total_amount', 'status','created_date', 'modify_date')
        read_only_fields = ('created_date', 'modify_date', )

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'product', 'order', 'quantity', 'subtotal')