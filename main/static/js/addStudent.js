function addStudent() {
    var name = document.getElementById("NAME").value;
    var Sid = document.getElementById("IDs").value;
    var gpa = document.getElementById("GPA").value;
    var email = document.getElementById("EMAIL").value;
    var phone = document.getElementById("PHONE").value;
    var select1 = document.getElementById("LEVEL");
    var level = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("DEPARTMENT");
    var select3 = document.getElementById("GENDER");
    var department = select2.options[select2.selectedIndex].value;
    var gender = select3.options[select3.selectedIndex].value;
    var date = document.getElementById("date-button").value;
    var ss = document.querySelector('#SWITCH').checked;
    var Status;
    if (ss) {
        Status = "active";
    } else {
        Status = "inactive";
    }
    request = new XMLHttpRequest();
    request.open("POST", "/addStudent/");
    csrftoken = document.cookie.split('csrftoken')[1].split('=')[1];
    request.setRequestHeader("X-CSRFToken", csrftoken);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = () => {
        var res = request.responseText
        if(res  == "Student added successfully"){
            window.location.href='/Student_Added';
        }else {
            window.location.href='/Student_Exists';
        }
    }
    request.send(JSON.stringify({
        "id": Sid,
        "name": name,
        "gpa": gpa,
        "email": email,
        "phone": phone,
        "level": level,
        "department": department,
        "gender": gender,
        "date": date,
        "status":Status
    }))
    
}