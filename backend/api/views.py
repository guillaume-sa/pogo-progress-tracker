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
        xp_entries = XpEntry.objects.filter(user=request.user).all()
        serializer = XpEntrySerializer(xp_entries, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = XpEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LatestXpEntryDetail(APIView):
    """
    Retrieve latest xp entry.
    """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_object(self, user):
        try:
            return XpEntry.objects.filter(user=user).latest('datetime')
        except XpEntry.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        xp_entry = self.get_object(request.user)
        serializer = XpEntrySerializer(xp_entry)
        return Response(serializer.data)
