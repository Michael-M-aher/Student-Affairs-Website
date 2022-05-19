from django.db import models

# Create your models here.


class Student(models.Model):
    def __str__(self):
        return str(self.id)
    GENERAL = 'general'
    CS = 'cs'
    IS = 'is'
    DS = 'ds'
    IT = 'it'
    AI = 'ai'
    MALE = 'male'
    FEMALE = 'female'
    ACTIVE = 'active'
    INACTIVE = 'inactive'

    DEPARTMENT = (
        (GENERAL, 'general'),
        (CS, 'cs'),
        (IS, 'is'),
        (DS, 'ds'),
        (IT, 'it'),
        (AI, 'ai'),
    )
    GENDER = (
        (MALE, 'male'),
        (FEMALE, 'female'),
    )
    STATUS = (
        (ACTIVE, 'active'),
        (INACTIVE, 'inactive'),
    )

    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    gpa = models.FloatField()
    email = models.EmailField()
    level = models.IntegerField()
    department = models.CharField(
        max_length=50, choices=DEPARTMENT, default=GENERAL)
    gender = models.CharField(max_length=25, choices=GENDER)
    phone = models.CharField(max_length=15)
    birth = models.DateField(blank=True)
    status = models.CharField(max_length=25, choices=STATUS, default=ACTIVE)
    image = models.ImageField(
        upload_to='main/static/profilePhotos/', blank=True)

    # Student( id = 20200576,name = "Michael",gpa = 3.5,email = "mishoopop6@gmail.com",level = 2,department = "general",gender = "male",phone = "01285382191",status="ACTIVE",birth = "2002-09-13")
