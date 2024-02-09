from django.db import models

# Create your models here.

class ChatRoom(models.Model):
    title = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Message(models.Model):
    chat_room = models.ForeignKey('ChatRoom', on_delete=models.CASCADE, related_name='messages')
    user = models.CharField(max_length=20)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} - {self.content}'