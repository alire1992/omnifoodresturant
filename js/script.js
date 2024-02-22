const header = document.querySelector(".header");

function toggleMenue() {
  header.classList.toggle("nav-open");
}

const allLink = document.querySelectorAll("a:link");

allLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const selectedE = document.querySelector(href);
      selectedE.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// Sticky NAV
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
