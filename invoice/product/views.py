from django.shortcuts import render
from django.core.mail import  send_mail

def home(request):
    return  render(request,'home.html')
# def orderPage(request):
#     return render(request,'order_page.html')

def orderPage(request):
    if request.method == 'POST':
        action = request.POST.get('submission')
        if action == 'only_submit':
            global form1, form2, form3
            form1 = request.POST['inkPens']
            form2 = request.POST['ballpoint-pen']
            form3 = request.POST['pilot-pen']
            # print(form1)
            # print(form2)
            # print(form3)
            return render(request, 'payments.html')




    else:
        return render(request,'order_page.html')
def payments(request):
    if request.method == 'POST':
        to_email = request.POST['to_email']
        messages = request.POST['text_boxes']
        send_mail(
            'TEST SUBJECT 001',# subject
            messages,
            'divitrao97d@gmail.com', #from_email
            [to_email] #to email

        )


        return render(request,'home.html')
    else:
        return render(request,'payments.html')

