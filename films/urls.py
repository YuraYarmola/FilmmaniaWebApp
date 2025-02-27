# films/urls.py
from django.urls import path
from .views import *


urlpatterns = [
    path('films/', FilmListView.as_view(), name='film_list'),
    path('films/<int:pk>/', FilmDetailView.as_view(), name='film_detail'),
    path('films/create/', FilmCreateView.as_view(), name='film_create'),
    path('films/<int:pk>/edit/', FilmUpdateView.as_view(), name='edit_film'),
    path('films/<int:pk>/delete/', FilmDeleteView.as_view(), name='delete_film'),
    path('', RedirectView.as_view(), name='redirect'),

    path('api/films/', FilmListAPIView.as_view(), name='film_list_api'),
    path('api/films/<int:pk>/', FilmDetailAPIView.as_view(), name='film_detail_api'),
]


