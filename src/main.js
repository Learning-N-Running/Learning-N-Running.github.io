const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
const home = document.querySelector(".home--opacity");
const homeHeight = home.getBoundingClientRect().height;
const skill = document.querySelector(".skills--opacity");
const skillHeight = skill.getBoundingClientRect().height;
const work = document.querySelector(".work--opacity");
const workHeight = work.getBoundingClientRect().height;
const testimonial = document.querySelector(".testimonial--opacity");
const testimonialHeight = testimonial.getBoundingClientRect().height;
const contact = document.querySelector(".contact--opacity");
const contactHeight = contact.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.scrollY < homeHeight) {
    const opacity = window.scrollY / homeHeight;
    home.style.opacity = 1 - opacity;
  } else if (window.scrollY > homeHeight && window.scrollY < skillHeight) {
    const opacity = window.scrollY - homeHeight / skillHeight - homeHeight;
    home.style.opacity = 1 - opacity;
  } else if (window.scrollY > skillHeight && window.scrollY < workHeight) {
    const opacity = window.scrollY - skillHeight / workHeight - skillHeight;
    home.style.opacity = 1 - opacity;
  } else if (
    window.scrollY > workHeight &&
    window.scrollY < testimonialHeight
  ) {
    const opacity =
      window.scrollY - workHeight / testimonialHeight - workHeight;
    home.style.opacity = 1 - opacity;
  } else if (
    window.scrollY > testimonialHeight &&
    window.scrollY < contactHeight
  ) {
    const opacity =
      window.scrollY - testimonialHeight / contactHeight - testimonialHeight;
    home.style.opacity = 1 - opacity;
  }
});

const arrow = document.querySelector(".arrow");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});
