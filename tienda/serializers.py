from rest_framework import serializers
from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'stock', 'image_url', 'category', 'created_date', 'modify_date', 'status')
        read_only_fields = ('created_date', 'modify_date', )

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('nombre',)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'stock', 'image_url', 'category', 'created_date', 'modify_date', 'status')
        read_only_fields = ('created_date', 'modify_date', )