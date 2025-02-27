from django.contrib import admin

from actors.models import Actor


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name')
    list_filter = ('name', 'last_name')
    search_fields = ('name', 'last_name')
    ordering = ('name', 'last_name')