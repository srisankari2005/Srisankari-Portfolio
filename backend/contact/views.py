from django.shortcuts import render, redirect
from .forms import ContactForm

def contact_view(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('/contact.html?success=1')

    else:
        form = ContactForm()

    success = request.GET.get('success') == '1'

    return render(request, 'portfolio/contact.html', {
        'form': form,
        'success': success
    })