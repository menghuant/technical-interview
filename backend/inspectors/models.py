from django.db import models
from django.contrib.auth.models import User


class Inspector(models.Model):
    """
    Inspector profile linked to Django's built-in User model.
    Use this model when creating availability configurations.
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='inspector')
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username}"

    class Meta:
        ordering = ['-created_at']
