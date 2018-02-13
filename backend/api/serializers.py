from rest_framework import serializers

from api.models import XpEntry


class XpEntrySerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = XpEntry
        fields = ('datetime', 'value', 'user',)

    def create(self, validated_data):
        """
        Create and return a new `XpEntry` instance, given the validated data.
        """
        return XpEntry.objects.create(**validated_data)
