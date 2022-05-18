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

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(name == null || name == ""){
    }else if(!regName.test(name)){
        document.getElementById("Pname").innerHTML = "Please enter your full name (firstname & lastname)";
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
        document.getElementById("Pid").innerHTML = "gpa must be all numbers";
        event.preventDefault();
    }else if(gpa < 0 || gpa > 4){
        document.getElementById("Pgpa").innerHTML = "Invalid gpa (please enter gpa from 0 to 4)";
        event.preventDefault();
    }else{
        document.getElementById("Pgpa").innerHTML = "";
    }

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email == null || email == ""){

    }else if(!(regEmail.test(email))){
        document.getElementById("Pemail").innerHTML = "You have entered an invalid email address!";
        event.preventDefault();
    }else{
        document.getElementById("Pemail").innerHTML = "";
    }
   
   if( (level == 0 || level== 1) && department != 0) {
        document.getElementById("Pdepart").innerHTML = "Check your level and department, if you are in level 1 or 2 choose department 'General'";
        event.preventDefault();
    }else if( (level == 2 || level== 3) && department == 0) {
        document.getElementById("Pdepart").innerHTML = "Check your level and department, if you are in level 3 or 4 you have to choose a specific department";
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
        document.getElementById("Pphone").innerHTML = "Invalid phone number";
        event.preventDefault();
    }else{
        document.getElementById("Pphone").innerHTML = "";
    }
  
}