from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from app.models.user import User

class UserController:
    @staticmethod
    def authenticate_user(request, username, password):
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return True
        return False

    @staticmethod
    def logout_user(request):
        logout(request)
        return redirect('login')