

var catNode = document.querySelector('.cat');

var screenRight = window.innerWidth;
console.log(screenRight);

catNode.style.left="0px"; // start position
var currentPositionX = 0;
var currentPositionY =20;
catNode.style.width="150px";
currentWidth = catNode.width;
var animationNumber = 1;
var CatWalkId=null;


movementObject = {
  leftToRightZoom:[2.9,0,0.5],
  rightToLeftZoom:[-2.9,0,0.5],
  leftToRightNoZoom:[2.9,0,0],
  rightToLeftNoZoom:[-2.9,0,0],
};
var currentMovementOrder = movementObject.leftToRightZoom;
var catTurnCount = 0;
var catWalk = function (){

  catNode.style.left=currentPositionX+"px";
  catNode.style.top=currentPositionY+"px";
  catNode.style.width=currentWidth+"px";

  currentPositionX = parseInt(currentPositionX);
  currentPositionY=parseInt(currentPositionY);
  //currentWidth=parseInt(currentWidth);
  currentWidth = parseFloat(currentWidth);

  currentPositionX += currentMovementOrder[0];
  currentPositionY += currentMovementOrder[1];
  currentWidth += currentMovementOrder[2];

  if ( (currentPositionX > screenRight - currentWidth)  && (catTurnCount <1) ){
    catNode.style.transform="scaleX(-1)";
    currentMovementOrder = movementObject.rightToLeftZoom;
    catTurnCount += 1;
    //window.clearInterval(CatWalkId);
  }
  if ( (currentPositionX > screenRight - currentWidth)  && (catTurnCount > 1) ){
    catNode.style.transform="scaleX(-1)";
    currentMovementOrder = movementObject.rightToLeftNoZoom;
    catTurnCount += 1;
    //window.clearInterval(CatWalkId);
  }

  if (currentPositionX < 0  && (catTurnCount < 2)){
    catNode.style.transform="scaleX(1)";
    currentMovementOrder = movementObject.leftToRightZoom;
    catTurnCount += 1;
  }
  if (currentPositionX < 0  && (catTurnCount > 2)){
    catNode.style.transform="scaleX(1)";
    currentMovementOrder = movementObject.leftToRightNoZoom;
    catTurnCount += 1;
  }
  // if (currentPositionX === (screenRight*0.3)){
  //   console.log("Cat Dance");
  //   catNode.setAttribute("src","http://37.media.tumblr.com/9a3debb1d127dca19a847bd04e575220/tumblr_n7bzevT8vH1sedjuto1_500.gif");
  //
  // }
  // if (CatTurnCount >10){
  //   catNode.setAttribute("src","http://www.anniemation.com/clip_art/images/cat-walk.gif");
  // }


console.log(catTurnCount);
};

CatWalkId = window.setInterval(catWalk,20);

console.log(screenRight);
