window.addEventListener("load", () => {
  const backBtn = document.querySelector(".back-btn");
  const tag = document.querySelector(".tag");
  const title = document.querySelector("h1");
  const subtext = document.querySelector(".subtext");
  const buttons = document.querySelectorAll(".contact-actions a");
  const socials = document.querySelectorAll(".social-links a");
  const infoCards = document.querySelectorAll(".contact-info div");
  const bgText = document.querySelector(".big-bg-text");

  const items = [
    backBtn,
    tag,
    title,
    subtext,
    ...buttons,
    ...socials,
    ...infoCards
  ];

  items.forEach((item, index) => {
    if (!item) return;

    setTimeout(() => {
      item.classList.add("show");
    }, 120 + index * 90);
  });

  if (bgText) {
    bgText.classList.add("bg-show");
  }
});

// Mouse glow movement
const contactPage = document.querySelector(".contact-page");

if (contactPage) {
  contactPage.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    contactPage.style.setProperty("--mouse-x", `${x * 100}%`);
    contactPage.style.setProperty("--mouse-y", `${y * 100}%`);
  });
}


