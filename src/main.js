const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".header__menu__item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // 모든 메뉴 아이템에서 'active' 클래스 제거
      menuItems.forEach((innerItem) => {
        innerItem.classList.remove("active");
      });

      // 클릭한 메뉴 아이템에 'active' 클래스 추가
      item.classList.add("active");
    });
  });
});

const home = document.querySelector(".home--opacity");
const homeHeight = home.getBoundingClientRect().height;
const about = document.querySelector(".about--opacity");
const aboutHeight = work.getBoundingClientRect().height;
const skills = document.querySelector(".skills--opacity");
const skillsHeight = skills.getBoundingClientRect().height;
const history = document.querySelector(".history--opacity");
const historyHeight = contact.getBoundingClientRect().height;

const arrow = document.querySelector(".arrow");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const homeSection = document.querySelector("#HOME");
  const aboutSection = document.querySelector("#About");
  const skillsSection = document.querySelector("#Skills");
  const historySection = document.querySelector("#History");

  const homePosition = homeSection.offsetTop;
  const aboutPosition = aboutSection.offsetTop;
  const skillsPosition = skillsSection.offsetTop;
  const historyPosition = historySection.offsetTop;

  if (scrollPosition >= homePosition && scrollPosition < aboutPosition) {
    window.location.hash = "Home";
  } else if (
    scrollPosition >= aboutPosition &&
    scrollPosition < skillsPosition
  ) {
    window.location.hash = "About";
  } else if (
    scrollPosition >= skillsPosition &&
    scrollPosition < historyPosition
  ) {
    window.location.hash = "Skills";
  } else if (scrollPosition >= historyPosition) {
    window.location.hash = "History";
  }
});

// JavaScript
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }

  if (window.scrollY > homeHeight / 2) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});
