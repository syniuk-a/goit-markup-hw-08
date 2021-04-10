(() => {
    const openMenuBtnRef = document.querySelector("[data-mobile-menu-open]");
    const closeMenuBtnRef = document.querySelector("[data-mobile-menu-close]");
  const mobileMenuRef = document.querySelector("[data-mobile-menu]");

  openMenuBtnRef.addEventListener("click", () => {
    const expanded =
      openMenuBtnRef.getAttribute("aria-expanded") === "true" || false;    
    openMenuBtnRef.setAttribute("aria-expanded", !expanded);
    closeMenuBtnRef.getAttribute("aria-expanded") === "true" || false; 
    closeMenuBtnRef.setAttribute("aria-expanded", !expanded);
      document.body.classList.toggle("mobile-menu--open");
      mobileMenuRef.classList.toggle("is-open");
  });
    closeMenuBtnRef.addEventListener("click", () => {
      const expanded =
      openMenuBtnRef.getAttribute("aria-expanded") === "true" || false;    
    openMenuBtnRef.setAttribute("aria-expanded", !expanded);
      closeMenuBtnRef.getAttribute("aria-expanded") === "true" || false;    
      closeMenuBtnRef.setAttribute("aria-expanded", !expanded);
      document.body.classList.toggle("mobile-menu--open");
      mobileMenuRef.classList.toggle("is-open");
  });
})();