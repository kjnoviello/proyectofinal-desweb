const phceEls = document.querySelectorAll(".phce") || [];
phceEls.forEach(phceEl => phceEl.addEventListener("pointermove", phceSetPositions))

function phceSetPositions({ currentTarget: el, layerX: x, layerY: y }){
  const { width: w, height: h }  = el.getBoundingClientRect();
  el.style.setProperty("--posX", phceMapPositions(x, [0, w]));
  el.style.setProperty("--posY", phceMapPositions(y, [0, h]));   
}

function phceMapPositions (value, from, to=[-1,1], decimals=2) {
  const newValue = (value - from[0]) * (to[1] - to[0]) / (from[1] - from[0]) + to[0];
  const val = Math.min(Math.max(newValue, to[0]) , to[1]);
  return decimals && decimals > 0 ? Number(Math.round(val+'e'+decimals)+'e-'+decimals) : val;
}



// BEDROOMS

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




// GARDEN

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " actives";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}


// POOL

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var captionText = document.getElementById("caption3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " actives";
  captionText.innerHTML = dots[slideIndex3-1].alt;
}


// FACILITIES

function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("demo4");
  var captionText = document.getElementById("caption4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots[slideIndex4-1].className += " actives";
  captionText.innerHTML = dots[slideIndex4-1].alt;
}