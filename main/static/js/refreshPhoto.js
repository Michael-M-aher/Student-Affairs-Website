var loadFile = function(event) {
    var image = document.getElementById('Student-img');
    image.src = URL.createObjectURL(event.target.files[0]);
  };