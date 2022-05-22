from django.contrib import admin
from .models import Student,Staff,impDate,New

# Register your models here.
admin.site.register(Student)
admin.site.register(Staff)
admin.site.register(impDate)
admin.site.register(New)