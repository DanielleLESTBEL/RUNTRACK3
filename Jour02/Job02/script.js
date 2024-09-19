/*const button = document.getElementById('button');
const article = document.getElementById('article');

function showhide() {
    if (article.display === '' ) {
        article.display = 'block'; 
    } else {
             article.display = 'none';
    }
}  
    
console.log(showhide);  

button.addEventListener("click", showhide); */

var article = document.getElementById("showhideText");

function showhide() {
    if (article.style.display === "none") {
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
    console.log(article);
}



button.addEventListener("click", showhide);