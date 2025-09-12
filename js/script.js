const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

function overMijFoto() {
const mijnFoto = document.getElementById("mijn-foto-home");
if (!mijnFoto) return; //Als het element met id "mijn-foto-home" niet bestaat, stop de functie
//voeg de click event listener toe aan het element
mijnFoto.addEventListener("click", function() {
    window.location.href = "html/overmij.html";
}
)};
overMijFoto();


function huidigeLeeftijd() {
    // Controleer of het element met id "leeftijd" bestaat
    const leeftijdElement = document.getElementById("leeftijd");
    if (!leeftijdElement) return;   // Als het element leeftijdElement niet bestaat, stop de functie

    // Bereken de huidige leeftijd
    const geboorte = new Date("1987-04-24");
    const vandaag = new Date();
    let leeftijd = vandaag.getFullYear() - geboorte.getFullYear();
    const verschilMaand = vandaag.getMonth() - geboorte.getMonth();

    if (verschilMaand < 0 || (verschilMaand === 0 && vandaag.getDate() < geboorte.getDate())) {
        leeftijd--;
    }
// Zet de leeftijd in het element met id "leeftijd"
    document.getElementById("leeftijd").textContent = leeftijd;
};
huidigeLeeftijd();

function naarHome() {
    const homeLink = document.getElementById("home");
    if (!homeLink) return; //Als het element met id "home" niet bestaat, stop de functie
    //voeg de click event listener toe aan het element
    homeLink.addEventListener("click", function() {
        window.location.href = "../index.html";
    }
)};
naarHome();

function naarExamen() {
    const examenLink = document.getElementById("gh-examen");
    if (!examenLink) return; //Als het element met id "gh-examen" niet bestaat, stop de functie
    //voeg de click event listener toe aan het element
    examenLink.addEventListener("click", function() {
        window.location.href = "https://elg87.github.io/ex-school/";
    }
)};
naarExamen();
function naarOdinRecipes() {
    const odinRecipesLink = document.getElementById("odin-recipes");
    if (!odinRecipesLink) return; //Als het element met id "odin-recipes" niet bestaat, stop de functie
    //voeg de click event listener toe aan het element
    odinRecipesLink.addEventListener("click", function() {
        window.location.href = "https://elg87.github.io/odin-recipes/";
    }
)};
naarOdinRecipes();

function naarReactVercel() {
    const reactVercelLink = document.getElementById("react-vercel");
    if (!reactVercelLink) return; //Als het element met id "react-vercel" niet bestaat, stop de functie
    //voeg de click event listener toe aan het element
    reactVercelLink.addEventListener("click", function() {
        window.location.href = "https://vercel.com/ellys-projects-e9385c7d/mijn-react-project";
    }
)};
naarReactVercel();

function naarReactGithub() {
    const reactGithubLink = document.getElementById("react-github");
    if (!reactGithubLink) return; //Als het element met id "react-github" niet bestaat, stop de functie
    //voeg de click event listener toe aan het element
    reactGithubLink.addEventListener("click", function() {
        window.location.href = "https://github.com/ElG87/Mijn-react-project";
    }
)};
naarReactGithub();

function naarBlog() {
    const blogLink = document.getElementById("blog");
    if (!blogLink) return; //Als het element met id "blog" niet bestaat, stop de functie
    //voeg de click event listener toe aan het element
    blogLink.addEventListener("click", function() {
        window.location.href = "https://eliyahspff.wordpress.com/";
    }
)};
naarBlog();

