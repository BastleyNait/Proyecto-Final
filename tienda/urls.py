from rest_framework import routers
from .api import ProductView, OrderView
router = routers.DefaultRouter()
router.register('', ProductView, 'products')
router.register('ordenes/', OrderView, 'ordenes')
urlpatterns = router.urls