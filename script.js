const initApp = () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  const menuNav = document.getElementById("menu-nav");

  const toggleMenu = () => {
    mobileMenuBtn.classList.toggle("is_open");
    mobileMenuCloseBtn.classList.toggle("is_open");
    menuNav.classList.toggle("is_open");
  };

  mobileMenuBtn.addEventListener("click", toggleMenu);
  mobileMenuCloseBtn.addEventListener("click", toggleMenu);
  menuNav.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
