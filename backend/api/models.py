from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator
from django.db import models

MAX_XP = 20000000


class XpEntry(models.Model):
    """ Xp Entry Model
    """
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    value = models.PositiveIntegerField(validators=[MaxValueValidator(MAX_XP)])
    datetime = models.DateTimeField()

    class Meta:
        ordering = ('datetime',)

    @staticmethod
    def get_last(user):
        """ Get last xp entry of a user

        Args:
            user:

        Returns:

        """
        return XpEntry.objects.filter(user=user).latest('datetime')

    def save(self, *args, **kwargs):
        """ Override default save method.
        Don't allow an Xp entry with a lower value than the last entry.

        Args:
            *args:
            **kwargs:

        Returns:

        """
        try:
            last_entry = XpEntry.get_last(self.user)
            if last_entry is not None and self.value < last_entry.value:
                raise ValidationError("Xp value should be higher or equal to the previous value.")
        except XpEntry.DoesNotExist:
            # No Xp entry found for the user, no validation needed
            pass
        super().save(*args, **kwargs)
