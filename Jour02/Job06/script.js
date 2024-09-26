let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

console.log(konamiCode);

document.addEventListener('keydown', function(touche) {
    if (touche.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateMagic();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
    console.log(konamiIndex);
});

function activateMagic() {
    document.body.classList.add('plateforme');
    let message = document.createElement('h2');
    message.textContent = "Bienvenue dans les couleurs de la Plateforme !";
    document.body.appendChild(message);

    console.log(activateMagic);
}

