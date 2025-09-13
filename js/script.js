document.addEventListener("DOMContentLoaded", () => {
  // Detecteer of we lokaal of op GitHub Pages draaien
  const repoRoot = window.location.hostname === "elg87.github.io"
    ? "/mijn-eigen-website/"
    : "/";

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('open');
    }
};

    // Interne links
     function setLink(id, url) {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener("click", () => {
      window.location.href = url;

    });
    }

    setLink("home", `${repoRoot}index.html`);
    setLink("mijn-foto-home", `${repoRoot}html/overmij.html`);
    setLink("over-mij-link", `${repoRoot}html/overmij.html`);
    setLink("project-link", `${repoRoot}html/projecten.html`);
    setLink("contact-link", `${repoRoot}html/contact.html`);
    setLink("logo", `${repoRoot}index.html`);



    // Leeftijd berekenen
    const leeftijdElement = document.getElementById("leeftijd");
    if (leeftijdElement) {
        const geboorte = new Date("1987-04-24");
        const vandaag = new Date();
        let leeftijd = vandaag.getFullYear() - geboorte.getFullYear();
        const verschilMaand = vandaag.getMonth() - geboorte.getMonth();
        if (verschilMaand < 0 || (verschilMaand === 0 && vandaag.getDate() < geboorte.getDate())) {
            leeftijd--;
        }
        leeftijdElement.textContent = leeftijd;
    }

});


