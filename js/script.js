//mobile nav open or hide

const navButton = document.querySelector(".btn-mobile-nav"); //for targetting btn-mobile-nav class

const header = document.querySelector(".header"); //for targetting header class

//adding event listener to btn-mobile-nav(navButton in js)

navButton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
}); //we can call a anonymous fuction by () => {function which we want to call or toggle};

//navbar sticky events

const sectionHero = document.querySelector(".section-hero"); //declare section-hero class through a variable named "sectionHero"

//intersection observer
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky"); //adding sticky class to the body
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky"); //removing sticky class from body
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);
