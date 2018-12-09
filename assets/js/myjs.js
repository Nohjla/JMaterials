$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-custom");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(".progress div").each(function () {
    var display = $(this),
        currentValue = parseInt(display.text()),
        nextValue = $(this).attr("aria-valuenow"),
        diff = nextValue - currentValue,
        step = (0 < diff ? 1 : -1);
    if (nextValue == "0") {
        $(display).css("padding", "0");
    } else {
        $(display).css("color", "#fff").animate({
            "width": nextValue + "%"
        }, "slow");
    }

    for (var i = 0; i < Math.abs(diff); ++i) {
        setTimeout(function () {
            currentValue += step
            display.html(currentValue + "%");
        }, 20 * i);
    }
});


// blog no. 1
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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
// end of blog one

// blog no. 2
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
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}
// end of blog no. 2

// blog no. 3
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
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var captionText = document.getElementById("caption3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
  captionText.innerHTML = dots[slideIndex3-1].alt;
}
// end of blog no. 3





$(document).ready(()=>{
    // owl carousel
    new WOW().init();
    // end of owl carousel

    // ow carousel
    $('#partnersList').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav:true,   
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#mission_policy').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:true,
        items:1
    });
    // end of owl carousel
});