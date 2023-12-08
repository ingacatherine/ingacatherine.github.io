// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function myFunction() {
  idArray = new Array()
  
  

  idArray [1] = "a winter fly // whispers its last words // in my ear // (written by Sanki)"
  idArray [2] = "Do not kill the fly! // See how it wrings it’s hands. // It’s feet! // (written by Kobayashi Issa)"
  idArray [3] = "As I wash my hands // The fly on the window sill // Is washing hers too // (written by Pete Crowther)"
  idArray [4] = "Thirty day lifespans // Many generations plague // Til temperatures drop // (written by Kellykbb22)"
  idArray [5] = "The greedy fruit fly // finds itself in a poo bag. // “Unlucky, I am!” // (written by Gavin Whyte)"

  document.getElementById("select").onclick = myFunction;
  randomParagraph = Math.floor(Math.random()*5);

  document.getElementById("result").innerHTML = idArray[randomParagraph + 1];  
  
  var idArray = string.split('~');
}


var object = document.getElementById('item');
  object.onclick=function(){
    var x = Math.floor(Math.random()*3000);
    var y = Math.floor(Math.random()*3000);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
  };

/* make fly move */
  $(document).ready(function(){
    animateIMG();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateIMG(){
    var newq = makeNewPosition();
    $('img').animate({ top: newq[0], left: newq[1] }, function(){
      animateIMG();        
    });
    
};



/* const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
} */