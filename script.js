// Stop browser from reopening page at old section after refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  "section, .service-card, .work-card, .step"
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 90) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); 



// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});




// Pause brand marquee on hover
const brandSection = document.querySelector(".brand-era");

if (brandSection) {
  const tracks = brandSection.querySelectorAll(".brand-track");

  brandSection.addEventListener("mouseenter", () => {
    tracks.forEach((track) => {
      track.style.animationPlayState = "paused";
    });
  });

  brandSection.addEventListener("mouseleave", () => {
    tracks.forEach((track) => {
      track.style.animationPlayState = "running";
    });
  });
}



const cursor = document.querySelector(".custom-cursor");

if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  const hoverItems = document.querySelectorAll(
    "a, button, .service-card, .work-card, .faq-question"
  );

  hoverItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });
}




// line reload
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 500);

  setTimeout(() => {
    preloader.style.display = "none";
  }, 1700);
});





document.querySelectorAll(".showcase-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(33,86,142,0.24), transparent 38%),
      rgba(242,242,242,0.045)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = `
      radial-gradient(circle at 70% 10%, rgba(33,86,142,0.26), transparent 42%),
      rgba(242,242,242,0.045)
    `;
  });
});

