from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Kiểm tra thông tin đăng nhập
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)  # Đăng nhập người dùng
            return redirect('dashboard')  # Chuyển hướng đến trang dashboard
        else:
            messages.error(request, "Tên người dùng hoặc mật khẩu không đúng!")

    return render(request, 'login.html')

def forgot_password(request):
    return render(request, 'forgot_password.html')

def home(request):
    return render(request, 'base.html')

def loadPage(request, page_name):
    # Render template tương ứng với tên trang
    template_name = f'page/{page_name}.html'
    return render(request, template_name)

# def dashboard(request):
#     return render(request, 'page/dashboard.html')

