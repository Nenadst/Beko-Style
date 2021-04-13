///////////////////////////////////////////////////////
/////////Dropdown

const tabsContent = document.querySelectorAll(".nav__dropdown-content");
const tabsContainer = document.querySelector(".nav");


tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  
  const clicked = e.target.closest(".nav__link");

  if (!clicked) return;
//   tabsContent.forEach(c => c.classList.remove("nav__active"));


      document
      .querySelector(`.nav__dropdown-content--${clicked.dataset.btn}`)
      .classList.toggle("nav__active");

});


///////////////////////////////////////////////////////
/////////HAMBURGER

const burger = document.querySelector(".header__hamburger");
const navi = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
  navi.classList.toggle("nav__active");
});

///////////////////////////////////////////////////////
/////////SWIPER
import Swiper, { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Autoplay, EffectFade, Pagination, Navigation]);


let swiper = new Swiper('.swiper-container', {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});


///////////////////////////////////////////////////////
/////////JS SLIDER

const slider = function () {
  const slides = document.querySelectorAll(".reference__slide");
  const btnLeft = document.querySelector(".reference__slider-btn--left");
  const btnRight = document.querySelector(".reference__slider-btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();

///////////////////////////////////////////////////////
/////////NO-HOVER

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
  }
  
  if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;
  
        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
          if (!styleSheet.rules[ri].selectorText) continue;
  
          if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
          }
        }
      }
    } catch (ex) {}
  }