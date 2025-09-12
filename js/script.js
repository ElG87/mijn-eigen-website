document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger?.addEventListener('click', () => {
        navMenu?.classList.toggle('open');
    });

    const repoRoot = window.location.hostname === "elg87.github.io" ? "/mijn-eigen-website/" : "/";

    function setLink(id, url) {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("click", () => {
            window.location.href = url;
        });
    }

    setLink("mijn-foto-home", `${repoRoot}html/overmij.html`);
    setLink("home", `${repoRoot}index.html`);
    setLink("over-mij-link", `${repoRoot}html/overmij.html`);
    setLink("project-link", `${repoRoot}html/projecten.html`);
    setLink("contact-link", `${repoRoot}html/contact.html`);

    setLink("gh-examen", "https://elg87.github.io/ex-school/");
    setLink("odin-recipes", "https://elg87.github.io/odin-recipes/");
    setLink("react-vercel", "https://vercel.com/ellys-projects-e9385c7d/mijn-react-project");
    setLink("react-github", "https://github.com/ElG87/Mijn-react-project");
    setLink("blog", "https://eliyahspff.wordpress.com/");

    function huidigeLeeftijd() {
        const leeftijdElement = document.getElementById("leeftijd");
        if (!leeftijdElement) return;

        const geboorte = new Date("1987-04-24");
        const vandaag = new Date();
        let leeftijd = vandaag.getFullYear() - geboorte.getFullYear();
        const verschilMaand = vandaag.getMonth() - geboorte.getMonth();

        if (verschilMaand < 0 || (verschilMaand === 0 && vandaag.getDate() < geboorte.getDate())) {
            leeftijd--;
        }

        leeftijdElement.textContent = leeftijd;
    }

    huidigeLeeftijd();
});
