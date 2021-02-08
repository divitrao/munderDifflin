from django.urls import path

from . import views

urlpatterns = [

    path('',views.home,name='home'),
    path('order_page',views.orderPage,name='order_page')
]