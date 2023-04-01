'use strict';

var cursor = document.querySelector('.cursor');

var customCursor = function customCursor(e){
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`               
  }

var addCursorExpand = function cursorExpand(){
  cursor.classList.add('cursor-expand');
}

var removeCursorExpand = function cursorExpand(){
  cursor.classList.remove('cursor-expand');
}

var links = document.querySelectorAll('a');
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', addCursorExpand);
    links[i].addEventListener('mouseleave', removeCursorExpand);
  }
  
  
  document.addEventListener('mousedown', addCursorExpand);
  document.addEventListener('mouseup', removeCursorExpand);

  document.addEventListener('mousemove', customCursor);

  

if (window.innerWidth > 768) {
        cursor.classList.add('cursor-gradient');
      }














