from django.urls import path
from . import views

urlpatterns = [
    path('', views.NewHomePage, name='NewHomePage'),
    path('NewHomePage/', views.NewHomePage, name='NewHomePage'),
    path('loginPage/', views.signin, name='signin'),
    path('signout/',views.signout, name='signout'),
    path('HomePage/', views.home, name='home'),
    path('Search/', views.search, name='search'),
    path('View-all/', views.view_all, name='view_all'),
    path('Add_Student/', views.add_student, name='add_student'),
    path('Edit_student_data/<int:student_id>/', views.edit_student, name='edit_student'),
    path('DeleteConfirmation/<int:student_id>/', views.delete_confirmation, name='delete_confirmation'),
    path('assign/<int:student_id>/', views.assign, name='assign'),
    path('Student_Added/', views.student_added, name='student_added'),
    path('Student_Edited/', views.student_edited, name='student_edited'),
    path('Student_Exists/', views.student_exists, name='student_exists'),
    path('searchStudent/', views.searchStudent, name='searchStudent'),
    path('getAllStudents/', views.getAllStudents, name='getAllStudents'),
    path('getHomepage/', views.getHomepage, name='getHomepage'),
    path('deleteStudent/', views.deleteStudent, name='deleteStudent'),
    path('assignStudent/', views.assignStudent, name='assignStudent')
]
