/* menuBurger */

const menuBurger = document.querySelector(".header-menu-burger");
const menuBody = document.querySelector(".header-menu");

if (menuBurger) {
  menuBurger.addEventListener("click", openMenu);
  function openMenu() {
    document.body.classList.toggle("body--lock");
    menuBurger.classList.toggle("header-menu-burger--active");
    menuBody.classList.toggle("header-menu--active");
  }
}

/* scroollToMenuElements */

const menuLinks = document.querySelectorAll(".header-menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    e.preventDefault();
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".header").offsetHeight;

      if (menuBurger.classList.contains("header-menu-burger--active")) {
        document.body.classList.remove("body--lock");
        menuBurger.classList.remove("header-menu-burger--active");
        menuBody.classList.remove("header-menu--active");
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
    }
  }
}
