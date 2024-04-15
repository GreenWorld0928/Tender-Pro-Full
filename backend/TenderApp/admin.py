from django.contrib import admin
from .models import ExeTeamMember
# Register your models here.
class ExeTeamMemberAdmin(admin.ModelAdmin):
  list_display = ("firstname", "lastname", "role", "description")

admin.site.register(ExeTeamMember, ExeTeamMemberAdmin)