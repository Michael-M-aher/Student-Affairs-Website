function getOrdinal(n) {
    let ord = ["st", "nd", "rd"]
    let exceptions = [11, 12, 13]
    let nth = 
    ord[(n % 10) - 1] == undefined || exceptions.includes(n % 100) ? "th" : ord[(n % 10) - 1]
    return n + nth
}
function getData(){
    request = new XMLHttpRequest();
    request.open("GET", "/getHomepage/");
    csrftoken = document.cookie.split('csrftoken')[1].split('=')[1];
    request.setRequestHeader("X-CSRFToken", csrftoken);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.onload = () => {
      var events = JSON.parse(request.responseText)['events'];
      var news = JSON.parse(request.responseText)['news'];
      var k = ''
      for (i = 0; i < events.length; i++) {
        var myDate = new Date(events[i]['date']);
        var day = myDate.getDate();
        var month = myDate.getMonth();
        var year = myDate.getFullYear();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        k+='<div class=\"functionalareas\" >' + events[i]['event'] +' <b>'+getOrdinal(day)+" of "+ months[month]+", "+ year +'.</b></div>';
      }
      document.getElementById('events').innerHTML = k;
      var k = ''
      for (i = 0; i < news.length; i++) {
        k+='<div class=\"functionalareas\" >'+news[i]['header']+ ":"+ news[i]['content'] +'</div>';
      }
      document.getElementById('news').innerHTML = k;
    }
    request.send();
}