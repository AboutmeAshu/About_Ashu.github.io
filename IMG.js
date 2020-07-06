var slideIndex = 1;
showSlides(slideIndex);

//var x=setInterval(plusSlides(1),5000);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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


var slideIndex_1 = 1;
showSlides_1(slideIndex_1);

//var x=setInterval(plusSlides(1),5000);

// Next/previous controls
function plusSlides_1(n) {
  showSlides_1(slideIndex_1 += n);
}



// Thumbnail image controls
function currentSlide_1(n) {
  showSlides_1(slideIndex_1 = n);
}

function showSlides_1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_1");
  var dots = document.getElementsByClassName("dot_1");
  if (n > slides.length) {slideIndex_1 = 1}
  if (n < 1) {slideIndex_1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_1", "");
  }
  slides[slideIndex_1-1].style.display = "block";
  dots[slideIndex_1-1].className += " active_1";
}


var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

//var x=setInterval(plusSlides(1),5000);

// Next/previous controls
function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}



// Thumbnail image controls
function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_2");
  var dots = document.getElementsByClassName("dot_1");
  if (n > slides.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_2", "");
  }
  slides[slideIndex_2-1].style.display = "block";
  dots[slideIndex_2-1].className += " active_2";
}


var slideIndex_3 = 1;
showSlides_3(slideIndex_3);

//var x=setInterval(plusSlides(1),5000);

// Next/previous controls
function plusSlides_3(n) {
  showSlides_3(slideIndex_3 += n);
}



// Thumbnail image controls
function currentSlide_3(n) {
  showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_3");
  var dots = document.getElementsByClassName("dot_1");
  if (n > slides.length) {slideIndex_3 = 1}
  if (n < 1) {slideIndex_3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active_3", "");
  }
  slides[slideIndex_3-1].style.display = "block";
  dots[slideIndex_3-1].className += " active_3";
}