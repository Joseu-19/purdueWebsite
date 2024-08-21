let slideIndex = 1;
showSlides(slideIndex); // Initialize with the first slide

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Reset the index if out of bounds
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides and remove 'active' class from all dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and highlight the corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  // Reset the timer for automatic slide change
  clearTimeout(window.slideTimer);
  window.slideTimer = setTimeout(() => plusSlides(1), 5000); // Change slide every 5 secs
}

showSlides(slideIndex);

//############ dropMenu ##################################################

let list = document.querySelector('ul');

function displayMenu(){
  if(list.style.display === 'none'){
    list.style.display = 'block';
  }
  else{
    list.style.display ='none';
    console.log('ahhhh')
  }
}

