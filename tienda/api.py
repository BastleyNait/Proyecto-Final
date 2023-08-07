from .models import Product, Order
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer,  OrderSerializer
class ProductView(viewsets.ModelViewSet):
    queryset= Product.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer

class OrderView(viewsets.ModelViewSet):
    def get_queryset(self):
        request = self.request
        return Order.objects.filter(customer=request.user.username)
    permission_classes = [permissions.AllowAny]
    serializer_class = OrderSerializer