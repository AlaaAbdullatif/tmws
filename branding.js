window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 500);

  setTimeout(() => {
    preloader.style.display = "none";
  }, 1700);
});

const animatedItems = document.querySelectorAll(
  ".back-btn, .branding-hero-content, .branding-box, .brand-item, .branding-cta"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

animatedItems.forEach((item) => {
  observer.observe(item);
});

document.querySelectorAll("a").forEach((link) => {
  const href = link.getAttribute("href");

  if (href && !href.startsWith("#") && !href.startsWith("http") && !href.startsWith("mailto")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const preloader = document.querySelector(".preloader");
      preloader.style.display = "flex";

      setTimeout(() => {
        window.location.href = href;
      }, 700);
    });
  }
});