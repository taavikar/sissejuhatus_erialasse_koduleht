/*allikas: https://www.w3schools.com/howto/howto_js_slideshow.asp*/

/*Muutujad*/
let slideIndex = 1;


/*Järgmine/eelmise pildi nupud galeriis*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*Nupukesest pilti vahel liikumine*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*Piltide kuvamine galeriisse*/
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}