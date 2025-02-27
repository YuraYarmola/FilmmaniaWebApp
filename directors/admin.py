from django.contrib import admin

from directors.models import Director


# Register your models here.
@admin.register(Director)
class DirectorAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name')
    list_filter = ('name', 'last_name')
    search_fields = ('name', 'last_name')
    ordering = ('name', 'last_name')