import json
from django.shortcuts import redirect, render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login,logout
from django.views.decorators.csrf import csrf_protect
from .models import Student,impDate,New
from django.contrib.auth.decorators import login_required

# Create your views here.

def NewHomePage(request):
    return render(request, 'NewHomePage.html')

@login_required
def home(request):
    return render(request, 'HomePage.html')

@login_required
def add_student(request):
    return render(request, 'Add_Student.html')

@login_required
def edit_student(request, student_id):
    student = Student.objects.get(id=student_id)
    return render(request, 'Edit_student_data.html', {'student': student})

@login_required
def search(request):
    return render(request, 'Search.html')

@login_required
def view_all(request):
    return render(request, 'View-all.html')
@login_required
def delete_confirmation(request, student_id):
    return render(request, 'DeleteConfirmation.html', {'id': student_id})

@login_required
def student_added(request):
    return render(request, 'Student_Added.html')

@login_required
def student_edited(request):
    return render(request, 'Student_Edited.html')

@login_required
def student_exists(request):
    return render(request, 'Student_Exists.html')

@login_required
def assign(request, student_id):
    student = Student.objects.get(id=student_id)
    if (student.level == 1 or student.level == 2):
        return render(request, 'error.html')
    else:
        return render(request, 'assign.html', {'student': student})


def signin(request):
    if request.user.is_authenticated:
        return render(request, 'homepage.html')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/HomePage')
        else:
             return HttpResponse("username incorrect or not found")
    else:
        return render(request, 'loginPage.html')

@login_required
@csrf_protect
def signout(request):
    logout(request)
    return redirect('/loginPage')


@login_required
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

@login_required
@csrf_protect
def editStudent(request):
    if(request.method != "POST"):
        return HttpResponse("You don't have permissions to use this page")
    else:
        data = json.loads(request.body)
        Sid = int(data['id'])
        if (Student.objects.filter(id=Sid).exists()):
            s = Student.objects.get(id=Sid)
            s.id = int(data['id'])
            s.name = data['name']
            s.gpa = float(data['gpa'])
            s.email = data['email']
            s.level = int(data['level'])
            s.gender = data['gender']
            s.phone = data['phone']
            s.status = data['status']
            s.birth = data['date']
            s.save()
            return HttpResponse("Student data edited successfully")
        else:
            return HttpResponse("Student doesn't Exists")

@login_required
@csrf_protect
def searchStudent(request):
    if(request.method != "POST"):
        return HttpResponse("You don't have permissions to see this page")
    else:
        data = json.loads(request.body)
        search_text = data['search_text']
        if search_text is not None:
            student = Student.objects.filter(name__startswith=search_text)
            if (search_text == ""):
                students = {"Students": ''}
            else:
                students = {"Students": list(student.values())}
            return JsonResponse(students)

@login_required
@csrf_protect
def deleteStudent(request):
    if(request.method != "POST"):
        return HttpResponse("You don't have permissions to see this page")
    else:
        data = json.loads(request.body)
        Sid = data['id']
        s = Student.objects.get(id=Sid)
        s.delete()
        return HttpResponse("Student deleted successfully")

@login_required
@csrf_protect
def getAllStudents(request):
    if(request.method != "GET"):
        return HttpResponse("You don't have permissions to see this page")
    else:
        students = list(Student.objects.values())
        return JsonResponse({"Students": students})

@login_required
@csrf_protect
def getHomepage(request):
    if(request.method != "GET"):
        return HttpResponse("You don't have permissions to see this page")
    else:
        news = list(New.objects.values())
        events = list(impDate.objects.values())
        return JsonResponse({"news": news,"events":events})

@login_required
@csrf_protect
def assignStudent(request):
    if(request.method != "POST"):
        return HttpResponse("You don't have permissions to use this page")
    else:
        data = json.loads(request.body)
        Sid = int(data['id'])
        if (Student.objects.filter(id=Sid).exists()):
            s = Student.objects.get(id=Sid)
            s.department = data['department']
            s.save()
            return HttpResponse("Student department edited successfully")
        else:
            return HttpResponse("Student doesn't Exists")
