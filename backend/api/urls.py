from django.conf.urls import url
from rest_framework.authtoken import views as auth_token_views
from rest_framework.urlpatterns import format_suffix_patterns

from api import views

urlpatterns = [
    url(r'^auth$', auth_token_views.obtain_auth_token, name='auth'),
    url(r'^xp/$', views.XpEntryList.as_view()),
    url(r'^xp/latest$', views.LatestXpEntryDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
