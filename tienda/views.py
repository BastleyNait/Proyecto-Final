from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError
from .forms import SignUpForm, LogInForm

# Create your views here.


def home(request):
    return render(request, 'index.html')


def carrito(request):
    return render(request, 'carrito.html')


def signin(request):
    if request.method == "GET":
        return render(request, 'signin.html', {
            'form': SignUpForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(
                    username=request.POST['username'],
                    password=request.POST['password1']
                )
                user.save()
                login(request, user,
                      backend='django.contrib.auth.backends.ModelBackend')
                print("se creo la cuenta y se inicio sesion")
                return redirect('home')
            except IntegrityError:
                print("el usuario ya existe")
                return render(request, 'signin.html', {
                    'form': SignUpForm,
                    'error': 'El nombre de usuario no esta disponible',
                }
                )
        print("las contras no coiciden")
        return render(request, 'signin.html', {
            'form': SignUpForm,
            'error': "Las contraseñas no coiciden",
        })


def user_login(request):
    if request.method == "GET":
        return render(request, 'login.html', {
            'form': LogInForm
        })
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password']
        )
        if user is None:
            print("El usuario o la contraseña son incorrectos")
            return render(request, 'login.html', {
                'form': LogInForm,
                'error': 'El usuario o la contraseña son incorrectos'
            })
        else:
            print('estas siendo redirigido')
            login(request, user)
            return redirect('home')


def user_logout(request):
    logout(request)
    return redirect('home')
