from django.contrib import admin

from films.models import Film


# Register your models here.
@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'release_date', )
    search_fields = ('title', 'release_date',)
    ordering = ('title', 'release_date')