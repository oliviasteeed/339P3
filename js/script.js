var cursor = document.getElementsByClassName('rounded');

var moveCursor = function(e) {
    var mouseY = e.clientY;
    var mouseX = e.clientX;
     
    cursorRounded.style.transform = `translated(${mouseX}px, ${mouseY}px, 0)`;
  }
  
  window.addEventListener('mousemove', moveCursor)