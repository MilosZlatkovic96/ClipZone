const navBtn = document.querySelector("#active");
const xBtn = document.querySelector("#hidden");
navBtn.addEventListener("click", () => {
  xBtn.removeAttribute("id", "hidden");
  navBtn.removeAttribute("id", "active");
  navBtn.setAttribute("id", "hidden");
  xBtn.setAttribute("id", "active");

  xBtn.addEventListener("click", () => {
    xBtn.removeAttribute("id", "active");
    navBtn.removeAttribute("id", "hidden");
    navBtn.setAttribute("id", "active");
    xBtn.setAttribute("id", "hidden");
  });
});

const locationIcon = document.querySelector(".fa-location-dot");
console.log(locationIcon);

locationIcon.addEventListener("mouseover", () => {
  const wearehere = document.querySelector(".we-are-here");
  wearehere.classList.remove("hidden");
});

locationIcon.addEventListener("mouseleave", () => {
  const wearehere = document.querySelector(".we-are-here");
  wearehere.classList.add("hidden");
});

gsap.registerPlugin("ScrollTrigger");
gsap.to(".backText", {
  color: "e4b97c",
  duration: 1,
  scrollTrigger: {
    markers: true,
    trigger: ".backText",
    start: "top top",
    scrub: true,
    pin: true,
  },
});

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    blur: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
