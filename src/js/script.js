$(document).ready(function () {
  /* tiny-slider */
  const slider = tns({
    container: ".tiny",
    items: 1,
    controls: false,
    nav: false,
    arrowKeys: true,
    speed: 800,
    autoplayButtonOutput: false,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause: true,
  });
  /* events for buttons */
  document.querySelector(".next").addEventListener("click", () => {
    slider.goTo("next");
  });
  document.querySelector(".prev").addEventListener("click", () => {
    slider.goTo("prev");
  });
});
