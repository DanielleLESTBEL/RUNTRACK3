/*
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
*/


const showButton = document.getElementById('showQuote');
const hideButton = document.getElementById('hideQuote');
const citation = document.getElementById('citation');


showButton.addEventListener('click', function() {
    citation.style.display = 'block';  
});

hideButton.addEventListener('click', function() {
    citation.style.display = 'none';
});

console.log(citation)