// Auto-generated stub for preset nav fix. Original shared script not shipped with the
// local Projects source; kept as a no-op so the preset sites render without 404s.
(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target && target.scrollIntoView) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
