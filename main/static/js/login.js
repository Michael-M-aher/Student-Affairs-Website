function USER()
{
    var S_username = document.getElementById("username").value;
    var S_password = document.getElementById("password").value;
    request = new XMLHttpRequest();
    request.open("POST", "/Authentication/");
    csrftoken = document.cookie.split('csrftoken')[1].split('=')[1];
    request.setRequestHeader("X-CSRFToken", csrftoken);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = () => {
        var res = request.responseText
        console.log(res);

        if(res=="login successfully")
        {
            window.location.href='/HomePage';
        }
        alert(res);
    }
    request.send(JSON.stringify({
        
        "username":S_username,
        "password":S_password
    }))
}