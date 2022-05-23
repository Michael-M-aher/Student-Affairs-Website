const hum_btn = document.getElementById("hum-btn");

hum_btn.addEventListener(("click"), ()=>{
  if(document.getElementById("menu-list").style.display === "block"){
    document.getElementById("menu-list").style.display = "none";
    document.getElementById("hum-btn").src = "/main/static/images/humburger.png";
  }else{
    document.getElementById("menu-list").style.display = "block";
    document.getElementById("hum-btn").src = "/main/static/images/downArrow.png";
  }
})