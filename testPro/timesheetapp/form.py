from django import forms
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
User._meta.get_field('email')._unique = True
class registerForm(UserCreationForm):

    firstname = forms.CharField(max_length=100, help_text='Last Name')
    lastname = forms.CharField(max_length=100, help_text='Last Name')
    email = forms.EmailField(max_length=150, help_text='Email')
    class Meta:
        model = User
        fields = ('username', 'firstname', 'lastname',
'email', 'password1', 'password2',)