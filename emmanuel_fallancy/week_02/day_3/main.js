console.log( "Annoying cat" );

var box = document.querySelector( "div" );

box.style.left = "0";
box.style.right = "0";

console.log( box.style.left, box.style.right );

var moveForward = function () {
   var leftPos = parseInt( box.style.left );
   leftPos += 100;
   box.style.left = leftPos + "px";

   return leftPos;
};

var moveBackward = function () {
  var leftPos = parseInt( box.style.left );
  leftPos -= 100;
  box.style.left = leftPos + "px";

  return leftPos;
}

var isMovingForward = true;

var moveAcross = function () {
  var leftPos = parseInt( box.style.left );

  if ( leftPos < window.screen.width && isMovingForward ) {
      leftPos = moveForward();
      if ( leftPos > window.screen.width ) {
        isMovingForward = false;
      }
  }
  else if ( leftPos > window.screen.availLeft && !isMovingForward ) {

      leftPos = moveBackward();
      if ( leftPos <= window.screen.availLeft ) {
        isMovingForward = true;
      }
  }
  
};
window.setInterval( moveAcross, 50 );
