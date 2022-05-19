// edit page variables are constant now so validation is not warking until we handle backend
function calcAge(){
    var date = document.getElementById("date-button").value;
    var dt = new Date(date);   
      var month_diff = Date.now() - dt.getTime();  
      var age_dt = new Date(month_diff);   
      var year = age_dt.getUTCFullYear();  
      var age = Math.abs(year - 1970);  
      return age;  
}


function validateForm() {

    var name = document.getElementById("NAME").value;
    var Sid = document.getElementById("IDs").value;
    var gpa = document.getElementById("GPA").value;
    var email = document.getElementById("EMAIL").value;
    var phone = document.getElementById("PHONE").value;
    var select1 = document.getElementById("LEVEL");
    var level = select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("DEPARTMENT");
    var department = select2.options[select2.selectedIndex].value;
    var regName = /^[a-zA-Z]+( [a-zA-Z]+)+$/ ;
    if(name == null || name == ""){
    }else if(!regName.test(name)){
        document.getElementById("Pname").innerHTML = "Please enter your Full Name (firstname & lastname)";
        event.preventDefault();
    }else{
        document.getElementById("Pname").innerHTML = "";
    }

    if(Sid == null || Sid == ""){

    }else if ( isNaN(Sid)|| Sid<0) {
        document.getElementById("Pid").innerHTML = "ID must be all positive numbers";
        event.preventDefault();
    }else{
        document.getElementById("Pid").innerHTML = "";
    }

    if(gpa == null || gpa == ""){

    }else if ( isNaN(gpa)) {
        document.getElementById("Pgpa").innerHTML = "GPA must be all numbers";
        event.preventDefault();
    }else if(gpa < 0 || gpa > 4){
        document.getElementById("Pgpa").innerHTML = "Invalid GPA (please enter GPA from 0 to 4)";
        event.preventDefault();
    }else{
        document.getElementById("Pgpa").innerHTML = "";
    }

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email == null || email == ""){

    }else if(!(regEmail.test(email))){
        document.getElementById("Pemail").innerHTML = "You have entered an invalid Email Address!";
        event.preventDefault();
    }else{
        document.getElementById("Pemail").innerHTML = "";
    }
   
   if( (level == 1 || level== 2) && department != "general") {
        document.getElementById("Pdepart").innerHTML = "Check your Level and Department, if you are in Level 1 or 2 choose Department 'General'";
        event.preventDefault();
    }else if( (level == 3 || level== 4) && department == "general") {
        document.getElementById("Pdepart").innerHTML = "Check your Level and Department, if you are in Level 3 or 4 you have to choose a specific Department";
        event.preventDefault();
    }else{
        document.getElementById("Pdepart").innerHTML = "";
    }
    
    let age = calcAge();
    if(age < 16){
        document.getElementById("Pbirth").innerHTML = "Age must be more than 16";
        event.preventDefault();
    }else{
        document.getElementById("Pbirth").innerHTML = "";
    }
   
    if(phone == null || phone == ""){

    }else if(phone.length != 11 || isNaN(phone)){
        document.getElementById("Pphone").innerHTML = "Invalid Phone Number";
        event.preventDefault();
    }else{
        document.getElementById("Pphone").innerHTML = "";
    }
  
}

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
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
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