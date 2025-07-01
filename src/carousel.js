export function setUpImageCarousel() {
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("[data-carousel]");
    if (!carousel) {
      console.error("Carousel element not found!");
      return;
    }

    const slides = carousel.querySelector("[data-slides]");
    if (!slides) {
      console.error("Slides element not found!");
      return;
    }

    const dots = carousel.querySelectorAll(".dot");

    function goToSlide(newIndex) {
      const activeSlide = slides.querySelector("[data-active]");
      if (!activeSlide) {
        console.error("Active slide not found!");
        return;
      }
      const totalSlides = slides.children.length;

      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === newIndex);
      });
    }
    if (dots.length > 0) {
      dots[0].classList.add("active");
    }

    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // If === next return 1 or else return the value -1
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const activeSlide = slides.querySelector("[data-active]");
        if (!activeSlide) return;
        const newIndex = [...slides.children].indexOf(activeSlide) + offset;
        goToSlide(newIndex);
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.dot);
        goToSlide(index);
      });
    });
  });
}
