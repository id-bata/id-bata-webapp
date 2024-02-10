from django.urls import path
from .views import ChatRoomListView, MessageListView

urlpatterns = [
    path('chatrooms/', ChatRoomListView.as_view(), name='chatroom-list'),
    path('messages/', MessageListView.as_view(), name='message-list')
]