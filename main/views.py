import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_protect
from .models import Student

# Create your views here.


def home(request):
    return render(request, 'HomePage.html')


def NewHomePage(request):
    return render(request, 'NewHomePage.html')


def add_student(request):
    return render(request, 'Add_Student.html')


def edit_student(request,student_id):
    student = Student.objects.get(id=student_id)
    return render(request, 'Edit_student_data.html',model_to_dict(student))


def search(request):
    return render(request, 'Search.html')


def view_all(request):
    return render(request, 'View-all.html')


def login(request):
    return render(request, 'loginPage.html')


def assign(request,student_id):
    return render(request, 'assign.html')


def delete_confirmation(request,student_id):
    return render(request, 'DeleteConfirmation.html')


def error(request):
    return render(request, 'error.html')

def student_added(request):
    return render(request, 'Student_Added.html')

def student_exists(request):
    return render(request, 'Student_Exists.html')


@csrf_protect
def addStudent(request):
    if(request.method != "POST"):
        return HttpResponse("You don't have permissions to use this page")
    else:
        data = json.loads(request.body)
        Sid = int(data['id'])
        if (not Student.objects.filter(id=Sid).exists()):
            s = Student()
            s.id = int(data['id'])
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

@csrf_protect
def editStudent(request):
    s = Student.objects.get(id=20200567)
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

@csrf_protect
def searchStudent(request):
    if(request.method != "POST"):
        return HttpResponse("You don't have permissions to see this page")
    else:
        data = json.loads(request.body)
        search_text = data['search_text']
        if search_text is not None:
            student = Student.objects.filter(name__startswith=search_text)
            if (search_text==""):
                students = {"Students": ''}
            else:
                students =  {"Students": list(student.values())}
            return JsonResponse(students)

@csrf_protect
def deleteStudent(request):
    s = Student.objects.filter(id=20200576)[0]
    s.delete()
    return HttpResponse("s.name")

@csrf_protect
def getAllStudents(request):
    if(request.method != "GET"):
        return HttpResponse("You don't have permissions to see this page")
    else:
        students = list(Student.objects.values())
        return JsonResponse({"Students": students})
    
