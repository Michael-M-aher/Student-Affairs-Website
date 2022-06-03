# Student Affairs Website Project

This is our Project for the Web technology course taken during fall 2022 semester.

<h2> Website Description</h2>
<h3>This website is for the stuff of the student affairs, each user can :</h3>
1. Add a new student to the system. Student information includes id, name,
date of birth, GPA, gender, level, status=”active”, “inactive”, department, email,
mobile number.</br>
2. Update an existing student information ( except department field should be
shown disabled for editing ).</br>
3. Can delete an existing student data through a delete button in edit student
data page with a confirmation dialogue for the action before deletion occurs.</br>
4. Search for “active” students by name in search for students screen and
students with similar names having active status should be rendered as a table.</br>
5. Select a specific student after searching to assign a department through
the student’s department assignment page.(applicable for students if level >= 3)</br>
6. View all active/inactive students in a separate page</br>

<h2>Project Steps: </h2>
<h3>First: (Front-end phase)</h3>
We started to implement the design using <b>html, css and javascript</b>, and made the website responsive for all screen sizes.</br>
<h3>Second: (Back-end phase)</h3>
We started to implement the backend of the website using <b>Django</b>: </br>
- built the database.</br>
- implemented the add, edit, search and assign departement functions</br>
- implemented the login/logout functions to make the website more secure.</br>

<h2>Some screenshots of the website:</h2>
<div>
<img src="https://user-images.githubusercontent.com/25803558/171784915-c170ea20-55b3-425e-a4d3-8ef9f3e4e231.jpeg"  width="600" height="400" />
<img src="https://user-images.githubusercontent.com/25803558/171784996-430c1021-ffc4-4219-aa7c-31a90fb57133.jpeg"  width="600" height="400" />
<img src="https://user-images.githubusercontent.com/25803558/171785005-f3c5a692-51ba-4db0-91a9-af2b199426fe.jpeg"  width="600" height="400" />
<img src="https://user-images.githubusercontent.com/25803558/171785165-cc3649e4-dcab-4b8e-8b70-8be83ddf0197.jpeg"  width="600" height="400" />
</div>

Setting up the environment 🛠
--------------------------

#### 1. Make sure python v3.7 or higher is installed:

console
* To get the version Excute:

```
$ python --version
Python 3.9.6
```

#### 2. Make Sure Git is installed:
* To get the version Excute:
```
$ git --version
git version 2.28.0.windows.1
```

#### 3. Execute the following commands in your terminal after changing your directory to the desired path

```
$ mkdir project && cd project
$ python -m venv django-env
```

For Windows Users:
```
$ django-env\Scripts\activate
```
For Linux Users:
```
$ source django-env/bin/activate
```
Then
```
$ git clone https://github.com/Michael-M-aher/Student-Affairs-Website.git && cd Student-Affairs-Website
$ pip install -r requirements.txt
```
<b>To test our web site here is a user name and password:</b></br>
username: michael</br>
password: michael1234
