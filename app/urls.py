from django.urls import path
from .views.user_views import user_login, forgot_password, home, loadPage

urlpatterns = [
    path('login/', user_login, name='login'),
    path('', user_login, name='login'),
    path('forgot-password/', forgot_password, name='forgot_password'),
    path('home/', home, name='home'),
    path('page/<str:page_name>/', loadPage, name='load_page'),  # Sửa lỗi đường dẫn động
]