/*
// On définit la séquence du code Konami (les codes des touches)
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// Tableau pour stocker les touches appuyées
let userInput = [];

// Écouteur d'événement pour les touches du clavier
window.addEventListener('keydown', function(event) {
    // On récupère le code de la touche pressée
    userInput.push(event.key);

    // On ne garde que les 10 dernières touches
    if (userInput.length > 10) {
        userInput.shift();
    }

    // Vérifier si le code entré correspond au code Konami
    if (userInput.toString() === konamiCode.toString()) {
        // Ajouter la classe 'konami-mode' au body pour changer le style
        document.body.classList.add('konami-mode');
    }
});
*/




// On définit la séquence du code Konami (les codes des touches)
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

// Tableau pour stocker les touches appuyées
let userInput = [];

// Écouteur d'événement pour les touches du clavier
window.addEventListener('keydown', function(event) {
    // On récupère le code de la touche pressée
    userInput.push(event.key);

    console.log(userInput)

    // On ne garde que les 10 dernières touches
    if (userInput.length > 10) {
        userInput.shift();
    }

    // Vérifier si le code entré correspond au code Konami
    if (userInput.toString() === konamiCode.toString()) {
        // Ajouter la classe 'konami-mode' au body pour changer le style
        document.body.classList.add('konami-mode');
    }
});

