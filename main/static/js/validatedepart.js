const level = document.getElementById("l").innerHTML;
function validatedepart(){
    if(level=='1'||level=='2'){
        window.location.href='/erorr';
    }
}