
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render
from django.http import Http404
from django.views.decorators.csrf import ensure_csrf_cookie
from contact.views import contact_view


# Portfolio pages
PAGES = [
    'index',
    'about',
    'achievements',
    'certifications',
    'contact',
    'education',
    'internships',
    'projects',
    'services',
    'skills',
]


@ensure_csrf_cookie
def show_page(request, page='index'):

    if page not in PAGES:
        raise Http404("Page not found")

    return render(
        request,
        f'portfolio/{page}.html'
    )


# Main URL configuration
urlpatterns = [

    path('admin/', admin.site.urls),

    # Contact backend API
    path('api/', include('contact.urls')),

    # Home page
    path('', show_page, {'page': 'index'}),

    # Other portfolio pages
    path('<str:page>.html', show_page),
    path('contact.html', contact_view, name='contact'),

]
