from django.shortcuts import redirect, render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.db import IntegrityError

# Create your views here.
def home(request):
    return render(request,'index.html')


def carrito(request):
    return render(request,'carrito.html')

def signin(request):
    if request.method == "GET":
        return render(request, 'signin', {
            'form' : UserCreationForm
        } )
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(
                    username=request.POST['username'],
                    password=request.POST['password1']
                )
                user.save()
                login(request,user)
                return redirect('home')
            except IntegrityError:
                return render(request, 'signin',{
                                  'form':UserCreationForm,
                                  'error': 'El nombre de usuario no esta disponible',
                              }
                              )
        return render(request, 'sigin', {
            'form':UserCreationForm,
            'error': "Las contraseñas no coiciden",
        })

def login(request):
    if request.method == "GET":
        return render(request, 'login',{
            'form': AuthenticationForm
        })
    else:
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password']
        )
        if user is None:
            return render(request, 'login',{
            'form': AuthenticationForm,
            'error': 'El usuario o la contraseña son incorrectos'
            }) 
        else:
            login(request,user)
            return redirect('home')
        
def logout(request):
    logout(request)
    return redirect('home')
        
        