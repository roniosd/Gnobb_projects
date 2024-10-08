document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".bx-pager-link");

  function changeSlide(nextIndex) {
    items[currentIndex].classList.remove("active");
    indicators[currentIndex].classList.remove("active");

    items[nextIndex].classList.add("active");
    indicators[nextIndex].classList.add("active");
    currentIndex = nextIndex;
  }

  setInterval(() => changeSlide((currentIndex + 1) % items.length), 3000);

  indicators.forEach((indicator, index) =>
    indicator.addEventListener("click", (e) => {
      e.preventDefault();
      changeSlide(index);
    })
  );
});
