
from django.urls import path
from . import views
from contact.views import contact_view

urlpatterns = [
   path('contact.html', contact_view, name='contact'),
]
