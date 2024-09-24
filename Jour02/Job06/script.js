
var footer = document.getElementById("footer"); // je récupère la valeur de la variable "footer" (dans la page HTML) par son id

// Fonction pour changer la couleur du footer en fonction du pourcentage de scroll
window.addEventListener("scroll", function() {
    // Hauteur totale du document moins la hauteur visible (viewport)
    var scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
console.log(scrollTotal);
    // Position actuelle de défilement
    var scrollPosition = window.scrollY;

    // Calcul du pourcentage de scroll
    var scrollPourcentage = (scrollPosition / scrollTotal) * 100;

    // On change la couleur du footer en fonction du pourcentage de scroll
    footer.style.backgroundColor = `hsl(${scrollPourcentage}, 100%, 50%)`;
});