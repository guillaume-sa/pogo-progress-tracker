from django.core.validators import MaxValueValidator
from django.db import models

MAX_XP = 20000000


class XpEntry(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    value = models.PositiveIntegerField(validators=[MaxValueValidator(MAX_XP)])
    datetime = models.DateTimeField()

    class Meta:
        ordering = ('datetime',)
