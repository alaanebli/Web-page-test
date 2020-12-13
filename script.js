// Menu toggle Function 

// open Menu   

document.getElementById('open').addEventListener('click', () => {
    document.getElementById('nav').style.right="0px" ;
    document.getElementById('nav').style.display="block" ;
    document.getElementById('open').style.right="-600px" ;
    document.getElementById('container').style.filter="blur(4px)" ;
});

// Close menu 

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('nav').style.display="none" ;
    document.getElementById('nav').style.right="-650px" ;
    document.getElementById('open').style.right="5px" ;
    document.getElementById('container').style.filter="blur(0px)" ;

});

// login/Sign up Toggle 

document.getElementById('create-account').addEventListener('click', () => {
    document.getElementById('login-form').style.transform="translate3d(-1800px,0,0)" ;
    document.getElementById('signup-form').style.transform="translate3d(0,0,0)" ;
});

document.getElementById('login').addEventListener('click', () => {
    document.getElementById('login-form').style.transform="translate3d(0,0,0)" ;
    document.getElementById('signup-form').style.transform="translate3d(-1800px,0,0)" ;
});

//slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}