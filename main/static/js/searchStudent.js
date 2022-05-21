function goToEdit(stuId){
    link = '/Edit_student_data/' + stuId.split('e')[1];
    window.location.href=link;
}
function goToAssign(stuId){
    link = '/assign/' + stuId.split('a')[1];
    window.location.href=link;
}
function loadSearchStudents(){
    var search = document.getElementById('isearch').value
    request = new XMLHttpRequest();
    request.open("POST", "/searchStudent/");
    csrftoken = document.cookie.split('csrftoken')[1].split('=')[1];
    request.setRequestHeader("X-CSRFToken", csrftoken);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = () => {
      var students = JSON.parse(request.responseText)['Students'];
      if(students == ""){
        document.getElementById("tableHead").style.display = "none";
      }else{
        document.getElementById("tableHead").style.display = "table-header-group";
      }
      var k = '<tbody>'
      for (i = 0; i < students.length; i++) {
        var img, stat;
        var name = students[i]['name'];
        var id = students[i]['id'].toString();
        if (students[i]['image'] == '') {
          if (students[i]['gender'] == 'male') {
            img = "/main/static/images/male_user.png";
          } else {
            img = "/main/static/images/female_user.png";
          }
        } else {
          var p = students[i]['image'].split('static/')[1];
          img = "/main/static/" + p;
        }
        if (students[i]['status'] == 'active') {
          stat = "<p style = \"color: green\">Active</p>";
        } else {
          stat = "<p style = \"color: red\">InActive</p>";
        }
        k += '<tr class=\"rw\">';
        k += '<td class=\"img\"><img src=\"' + img + '\"></td>';
        k += '<td class=\"name\">' + name + '</td>';
        k += '<td class=\"id\">' + id + '</td>';
        k += '<td class=\"swtch\">' + stat + '</td>';
        k += '<td class=\"btn\"><button onclick=\"goToEdit(this.id)" id = \"e'+id+'\"><i class=\"fas fa-pen\" ></i></button></td>';
        k += '<td class=\"btn\"><a href=\"#\" onclick=\"goToAssign(this.id)" id = \"a'+id+'\"><img src=\"' + "/main/static/images/department.png" + '\" id=\"depimg\"/></a></td>';
        k += '</tr>';
      }
      k += '</tbody>';
      document.getElementById('tableData').innerHTML = k;
    }
    request.send(JSON.stringify({
      'search_text': search
    }))
  }