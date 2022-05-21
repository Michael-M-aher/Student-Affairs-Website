function redirectDelete(Sid){
    link = '/DeleteConfirmation/'+Sid
    window.location.href=link
};

function deleteStudent(Sid){
    request = new XMLHttpRequest();
    request.open("POST", "/deleteStudent/");
    csrftoken = document.cookie.split('csrftoken')[1].split('=')[1];
    request.setRequestHeader("X-CSRFToken", csrftoken);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.onload = () => {
        window.location.href='/View-all';
    }
    request.send(JSON.stringify({"id": Sid}));
}