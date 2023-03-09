let slideIndex = 0;
showSlides();

// experience script
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}

let slide2Index = 0;
showSlides2();

function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slide2Index++;
  if (slide2Index > slides2.length) {slide2Index = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }
  slides2[slide2Index-1].style.display = "block";  
  dots2[slide2Index-1].className += " active2";
  setTimeout(showSlides2, 2000);
}

let slide3Index = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  slide3Index++;
  if (slide3Index > slides3.length) {slide3Index = 1}    
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active3", "");
  }
  slides3[slide3Index-1].style.display = "block";  
  dots3[slide3Index-1].className += " active3";
  setTimeout(showSlides3, 2000);
}