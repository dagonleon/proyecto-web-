$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
  
});
// ================================================ Menú hamburguesa ===============================================
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
// =========================================== Fin menu hamburguesa ===================================================

// =========================================== Go to top + progress bar ==================================================
(function ($) {
  "use strict";

  //Switch dark/light

  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
// =========================================== Fin go to top + progress bar ===================================================

// ==================================================== FAQ =============================================================

// ================================================ Fin FAQ ==============================================================
// ================================================ Dark/Light mode  ===============================================
function toggleDarkLight() {
  // Cambiar la etiqueta del body
  var body = document.getElementById("body");
  var claseActual = body.className;
  body.className = claseActual == "dark-mode" ? "light-mode" : "dark-mode";
  claseActual = body.className

  // Cambiar las imagenes negras por unas en blanco
  if (claseActual == "dark-mode") {

    var todasLasFotos = document.getElementsByTagName('img');
    for (var i = 0; i < todasLasFotos.length; i++) {
      if (todasLasFotos[i].classList.contains('black-image')) {
        todasLasFotos[i].classList.remove('black-image')
        todasLasFotos[i].classList.add('white-image')
      }
    }
    var todosLosBotones = document.getElementsByTagName('button');
    for (var i = 0; i < todosLosBotones.length; i++) {
      if (todosLosBotones[i].classList.contains('dark-mode-button')) {
        todosLosBotones[i].classList.add('white-mode-button')
        todosLosBotones[i].classList.remove('dark-mode-button')
      }
    }

  } else if (claseActual == "light-mode") {

    var todasLasFotos = document.getElementsByTagName('img');
    for (var i = 0; i < todasLasFotos.length; i++) {
      if (todasLasFotos[i].classList.contains('white-image')) {
        todasLasFotos[i].classList.add('black-image')
        todasLasFotos[i].classList.remove('white-image')
      }
    }
    var todosLosBotones = document.getElementsByTagName('button');
    for (var i = 0; i < todosLosBotones.length; i++) {
      if (todosLosBotones[i].classList.contains('white-mode-button')) {
        todosLosBotones[i].classList.add('dark-mode-button')
        todosLosBotones[i].classList.remove('white-mode-button')
      }
    }

  }
}
// ===============================================================================================================

// ================================================ Formulario Si/No ==============================================================
function myFunction() {
  var checkBox = document.getElementById("respuesta");
  var text = document.getElementById("text");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
// ================================================ Fin Formulario Si/No ==============================================================

// ================================================ Formulario tipo range ==============================================================
function slider() {
  var range = document.getElementById("rango");
  var resp = document.getElementById("valor");
  resp.innerHTML = range.value;


  resp.innerHTML = range.value;
}
// ================================================ Fin Formulario tipo range ==============================================================
// ================================================ Preguntas FAQ ==============================================================
var acordion = document.getElementsByTagName("faq-accordion");
var i;
var len = acordion.length;
for (i = 0; i < len; i++) {
  acordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panal = this.nextElementSibling;
    if (panal.style.maxHeight) {
      panal.style.maxHeight = null;
    } else {
      panal.style.maxHeight = panal.scrollHeight + "px";
    }
  });
}
// ================================================ Fin Preguntas FAQe ==============================================================


