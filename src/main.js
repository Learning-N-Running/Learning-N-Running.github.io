const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
// // JavaScript
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

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const homeSection = document.querySelector("#Home");
  const aboutSection = document.querySelector("#About");
  const skillsSection = document.querySelector("#Skills");
  const historySection = document.querySelector("#History");

  const homePosition = homeSection.offsetTop;
  const aboutPosition = aboutSection.offsetTop;
  const skillsPosition = skillsSection.offsetTop;
  const historyPosition = historySection.offsetTop;

  if (scrollPosition >= 0 && scrollPosition < aboutPosition - 100) {
    // window.location.hash = "#Home";
    history.replaceState(null, null, "#Home");
    const menuItems = document.querySelectorAll(".header__menu__item");
    menuItems.forEach((innerItem) => {
      innerItem.classList.remove("active");
    });
    const linkElement = document.querySelector('a[href="#Home"]');
    linkElement.parentNode.classList.add("active");
  } else if (
    scrollPosition >= aboutPosition - 100 &&
    scrollPosition < skillsPosition - 140
  ) {
    // window.location.hash = "#About";
    history.replaceState(null, null, "#About");
    const menuItems = document.querySelectorAll(".header__menu__item");
    menuItems.forEach((innerItem) => {
      innerItem.classList.remove("active");
    });
    const linkElement = document.querySelector('a[href="#About"]');
    linkElement.parentNode.classList.add("active");
  } else if (
    scrollPosition >= skillsPosition - 140 &&
    scrollPosition < historyPosition - 100
  ) {
    // window.location.hash = "#Skills";
    history.replaceState(null, null, "#Skills");
    const menuItems = document.querySelectorAll(".header__menu__item");
    menuItems.forEach((innerItem) => {
      innerItem.classList.remove("active");
    });
    const linkElement = document.querySelector('a[href="#Skills"]');
    linkElement.parentNode.classList.add("active");
  } else if (scrollPosition >= historyPosition - 100) {
    // window.location.hash = "#History";
    history.replaceState(null, null, "#History");
    const menuItems = document.querySelectorAll(".header__menu__item");
    menuItems.forEach((innerItem) => {
      innerItem.classList.remove("active");
    });
    const linkElement = document.querySelector('a[href="#History"]');
    linkElement.parentNode.classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".header__menu__item a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 이벤트를 막아서 수동으로 스크롤 조절하기 위함

      const targetId = this.getAttribute("href").substring(1); // href에서 #을 제거합니다.
      const targetElement = document.getElementById(targetId);
      const offset = 50;

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    });
  });
});
