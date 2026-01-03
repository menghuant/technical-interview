"""
URL configuration for Morph Interview project.
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('availability.urls')),
]
