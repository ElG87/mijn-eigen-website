function overMijFoto() {
const mijnFoto = document.getElementById("mijn-foto-home");

mijnFoto.addEventListener("click", function() {
    window.location.href = "../html/overmij.html";
}
)}


function huidigeLeeftijd() {
    const geboorte = new Date("1987-04-24");
    const vandaag = new Date();
    let leeftijd = vandaag.getFullYear() - geboorte.getFullYear();
    const verschilMaand = vandaag.getMonth() - geboorte.getMonth();

    if (verschilMaand < 0 || (verschilMaand === 0 && vandaag.getDate() < geboorte.getDate())) {
        leeftijd--;
    }

    document.getElementById("leeftijd").textContent = leeftijd;
};
huidigeLeeftijd();

