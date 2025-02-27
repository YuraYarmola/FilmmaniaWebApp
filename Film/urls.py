from django.conf.urls.static import static
from django.contrib import admin

from django.urls import path, include, re_path
from django.conf.urls import handler404, handler500
from .views import custom_404, custom_500
from Film import settings
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('films.urls')),
    path('', include('actors.urls')),
    path('', include('directors.urls')),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = custom_404
handler500 = custom_500
