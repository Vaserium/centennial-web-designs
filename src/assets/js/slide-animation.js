function slide_animation() {
  var slide_animations = document.querySelectorAll(".slide-animation");

  for (var i = 0; i < slide_animations.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = slide_animations[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      slide_animations[i].classList.add("active");
    }
    /*
		else {
      slide_animations[i].classList.remove("active");
    }
		*/
  }
}

window.addEventListener("scroll", slide_animation);
