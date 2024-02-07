from django.test import TestCase
from django.utils import timezone
# test_models.py のインポート文
from idbata.models import ChatRoom, Message, CustomUser
from django.contrib.auth import get_user_model

class ChatRoomModelTests(TestCase):

    def test_is_active_within_one_hour(self):
        """ChatRoomが作成されてから1時間以内はis_activeがTrueになることをテスト"""
        chat_room = ChatRoom.objects.create()
        self.assertTrue(chat_room.is_active())

    def test_is_active_after_one_hour(self):
        """ChatRoomが作成されてから1時間後はis_activeがFalseになることをテスト"""
        time = timezone.now() - timezone.timedelta(hours=1, minutes=1)
        chat_room = ChatRoom.objects.create(created_at=time)
        self.assertFalse(chat_room.is_active())

class MessageModelTests(TestCase):

    def setUp(self):
        """テスト用のChatRoomを作成"""
        self.chat_room = ChatRoom.objects.create()

    def test_message_creation(self):
        """Messageインスタンスが正しく作成されることをテスト"""
        message = Message.objects.create(room=self.chat_room, username='testuser', text='Hello World')
        self.assertEqual(message.room, self.chat_room)
        self.assertEqual(message.username, 'testuser')
        self.assertEqual(message.text, 'Hello World')

class CustomUserModelTests(TestCase):

    def test_create_user(self):
        """カスタムユーザーが正しく作成されることをテスト"""
        User = get_user_model()
        user = User.objects.create_user(username='testuser', password='testpass')
        self.assertEqual(user.username, 'testuser')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_superuser(self):
        """スーパーユーザーが正しく作成されることをテスト"""
        User = get_user_model()
        superuser = User.objects.create_superuser(username='admin', password='adminpass')
        self.assertEqual(superuser.username, 'admin')
        self.assertTrue(superuser.is_active)
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)
