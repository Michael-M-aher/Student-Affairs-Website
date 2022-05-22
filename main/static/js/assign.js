function assignStudent(Sid) {
    var select2 = document.getElementById("dep");
    var department = select2.options[select2.selectedIndex].value;

    request = new XMLHttpRequest();
    request.open("POST", "/assignStudent/");
    csrftoken = document.cookie.split('csrftoken')[1].split('=')[1];
    request.setRequestHeader("X-CSRFToken", csrftoken);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = () => {
        history.back();
    }
    request.send(JSON.stringify({
        "id": Sid,
        "department": department
    }))
}