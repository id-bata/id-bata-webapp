from django.contrib import admin
from .models import ChatRoom, Message, CustomUserManager, CustomUser

# Register your models here.
admin.site.register(ChatRoom)