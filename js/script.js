document.addEventListener("DOMContentLoaded", () => {

    // Dynamische root
    const scripts = document.getElementsByTagName('script');
    const thisScript = scripts[scripts.length - 1].src;
    const repoRoot = thisScript.substring(0, thisScript.lastIndexOf("/js/") + 1);

    // Hamburger-menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

    // Klikbare foto
    const mijnFoto = document.getElementById("mijn-foto-home");
    if (mijnFoto) {
        mijnFoto.addEventListener("click", () => {
            window.location.href = `${repoRoot}html/overmij.html`;
        });
    }

    // Interne links
    function setLink(id, url) {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = url;
        });
    }

    setLink("home", `${repoRoot}../index.html`);
    setLink("over-mij-link", `${repoRoot}html/overmij.html`);
    setLink("project-link", `${repoRoot}html/projecten.html`);
    setLink("contact-link", `${repoRoot}html/contact.html`);



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

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('open');
    }
};
