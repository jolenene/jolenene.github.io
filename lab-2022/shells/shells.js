

function myFunction(){
  var divs = document.getElementsByTagName("div");
  // get window width and height
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  
  var minWidth = winWidth * 0.2;

  for ( var i=0; i < divs.length; i++ ) {

    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(-2000, winWidth-900);
    randomLeft = getRandomNumber(minWidth, winWidth-100);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
  }

}
// i stands for "index". you could also call this banana or haircut. it's a variable

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}