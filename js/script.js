

var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});



var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', () => {
    cursor.classList.add('cursor-expand');
  });

  links[i].addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-expand');
  });
}

document.addEventListener('mousedown', function () {
  cursor.classList.add('cursor-expand');
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('cursor-expand');
});