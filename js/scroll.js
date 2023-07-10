const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener("click", scrollToAnchor);
});

function scrollToAnchor(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetOffset = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  }
}
