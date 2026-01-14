// script.js
(() => {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (toggle && menu) {
    const closeMenu = () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on link click (mobile)
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => closeMenu());
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const isClickInside = menu.contains(e.target) || toggle.contains(e.target);
      if (!isClickInside) closeMenu();
    });

    // Close on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
})();
