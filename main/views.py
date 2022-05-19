import json
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from .models import Student

# Create your views here.


def home(request):
    return render(request, 'HomePage.html')


def NewHomePage(request):
    return render(request, 'NewHomePage.html')


def add_student(request):
    return render(request, 'Add_Student.html')


def edit_student(request):
    return render(request, 'Edit_student_data.html')


def search(request):
    students = Student.objects.all()
    return render(request, 'Search.html', {'Students': students})


def view_all(request):
    students = Student.objects.all()
    return render(request, 'View-all.html', {'Students': students})


def login(request):
    return render(request, 'loginPage.html')


def assign(request):
    return render(request, 'assign.html')


def delete_confirmation(request):
    return render(request, 'DeleteConfirmation.html')


def error(request):
    return render(request, 'error.html')

def student_added(request):
    return render(request, 'Student_Added.html')

def student_exists(request):
    return render(request, 'Student_Exists.html')


@csrf_protect
def addStudent(request):
    data = json.loads(request.body)
    Sid = int(data['id'])
    if (not Student.objects.filter(id=Sid).exists()):
        s = Student()
        s.id = Sid
        s.name = data['name']
        s.gpa = float(data['gpa'])
        s.email = data['email']
        s.level = int(data['level'])
        s.department = data['department']
        s.gender = data['gender']
        s.phone = data['phone']
        s.status = data['status']
        s.birth = data['date']
        s.save()
        return HttpResponse("Student added successfully")
    else:
        return HttpResponse("Student already Exists")


def editStudent(request):
    s = Student.objects.filter(id=20200567)[0]
    s.id = 20200567
    s.name = "Monica Saeed"
    s.gpa = 3.5
    s.email = "mishoopop6@gmail.com"
    s.level = 2
    s.department = "general"
    s.gender = "male"
    s.phone = "01285382191"
    s.status = "ACTIVE"
    s.birth = "2002-09-13"
    s.save()
    return HttpResponse("Student data edited successfully")


def searchStudent(request):
    if Student.objects.filter(id=20200576).__len__() == 0:
        return HttpResponse("Student not found")
    else:
        s = Student.objects.filter(id=20200576)[0]
        s.id
        s.name
        s.gpa
        s.email
        s.level
        s.department
        s.gender
        s.phone
        s.status
        s.birth
        return HttpResponse(s.name)


def deleteStudent(request):
    s = Student.objects.filter(id=20200576)[0]
    s.delete()
    return HttpResponse("s.name")
