from rest_framework import routers
from .api import ProductView
router = routers.DefaultRouter()
router.register('', ProductView, 'products')
urlpatterns = router.urls