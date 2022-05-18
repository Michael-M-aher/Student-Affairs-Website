from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import Student

# Create your views here.

def home(request):
    return render(request, 'HomePage.html')
def add_student(request):
    return render(request, 'Add_Student.html')
def edit_student(request):
    return render(request, 'Edit_student_data.html')
def search(request):
    return render(request, 'Search.html')
def view_all(request):
    return render(request, 'View-all.html')
def login(request):
    return render(request, 'loginPage.html')
def assign(request):
    return render(request, 'assign.html')
def delete_confirmation(request):
    return render(request, 'DeleteConfirmation.html')
def error(request):
    return render(request, 'error.html')

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
