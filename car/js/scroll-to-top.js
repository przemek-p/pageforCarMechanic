const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});