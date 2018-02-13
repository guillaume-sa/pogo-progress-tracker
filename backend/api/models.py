from django.db import models


class XpEntry(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    value = models.PositiveIntegerField()
    datetime = models.DateTimeField()

    class Meta:
        ordering = ('datetime',)
