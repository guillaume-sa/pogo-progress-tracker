from django.core.exceptions import ValidationError
from django.http import Http404
from rest_framework import permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import XpEntry
from api.serializers import XpEntrySerializer


class XpEntryList(APIView):
    """
    List all XP entries, or create a new xp entry.
    """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get(self, request):
        """ List all Xp entries.

        Args:
            request:

        Returns:

        """
        xp_entries = XpEntry.objects.filter(user=request.user).all()
        serializer = XpEntrySerializer(xp_entries, many=True)
        return Response(serializer.data)

    def post(self, request):
        """ Create a new Xp entry.

        Args:
            request:

        Returns:

        """
        serializer = XpEntrySerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save(user=self.request.user)
            except ValidationError:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LatestXpEntryDetail(APIView):
    """
    Retrieve latest xp entry.
    """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_object(self, user):
        """ Get xp entry.

        Args:
            user:

        Returns:

        """
        try:
            return XpEntry.get_last(user)
        except XpEntry.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        """ Get latest xp entry.

        Args:
            request:
            format:

        Returns:

        """
        xp_entry = self.get_object(request.user)
        serializer = XpEntrySerializer(xp_entry)
        return Response(serializer.data)
