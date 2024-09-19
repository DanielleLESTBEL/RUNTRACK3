
var compteur = 0;
var button = document.getElementById("button");

function addone() {
   compteur++;
   document.getElementById("compteur").textContent = compteur;

   console.log(compteur);
}


button.addEventListener('click', addone);