from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import Student

# Create your views here.

def main(request):
    return render(request, 'HomePage.html')

def addStudent(request):
    s = Student()
    s.id = 20200567
    s.name = "Michael"
    s.gpa = 3.5
    s.email = "mishoopop6@gmail.com"
    s.level = 2
    s.department = "general"
    s.gender = "male"
    s.phone = "01285382191"
    s.status="ACTIVE"
    s.birth = "2002-09-13"
    s.save()
    return HttpResponse("Student added")
