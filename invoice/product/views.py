from django.shortcuts import render

def home(request):
    return  render(request,'home.html')
def orderPage(request):
    return render(request,'order_page.html')