const scrollButton = document.querySelector(".button-up");

window.addEventListener("scroll", toggleScrollButton);

scrollButton.addEventListener("click", scrollToTop);

function toggleScrollButton() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollThreshold = windowHeight * 0.6;

  if (scrollY >= scrollThreshold) {
    scrollButton.style.opacity = "1";
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.opacity = "0";
    scrollButton.style.visibility = "hidden";
  }
}

// Приховуємо кнопку при завантаженні сторінки
scrollButton.style.opacity = "0";
scrollButton.style.visibility = "hidden";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}