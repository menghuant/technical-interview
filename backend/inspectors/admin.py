from django.contrib import admin
from .models import Inspector


@admin.register(Inspector)
class InspectorAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone', 'company', 'created_at']
    search_fields = ['user__username', 'user__email', 'company']
    list_filter = ['created_at']
