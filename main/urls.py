from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.NewHomePage, name='NewHomePage'),
    path('NewHomePage', views.NewHomePage, name='NewHomePage'),
    path('HomePage', views.home, name='home'),
    path('Add_Student/', views.add_student, name='add_student'),
    path('Edit_student_data/', views.edit_student, name='edit_student'),
    path('Search/', views.search, name='search'),
    path('View-all/', views.view_all, name='view_all'),
    path('loginPage/', views.login, name='login'),
    path('assign/', views.assign, name='assign'),
    path('DeleteConfirmation/', views.delete_confirmation, name='delete_confirmation'),
    path('error/', views.error, name='error'),
    path('addStudent/', views.addStudent, name='addStudent'),
    path('editStudent/', views.editStudent, name='editStudent'),
    path('searchStudent/', views.searchStudent, name='searchStudent'),
    path('deleteStudent/', views.deleteStudent, name='deleteStudent')
]