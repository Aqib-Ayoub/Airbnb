from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import Property

from .serializers import PropertiesListSerializers

# @api_view(['GET'])