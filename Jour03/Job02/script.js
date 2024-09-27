
const showButton = document.getElementById('showQuote');
const hideButton = document.getElementById('hideQuote');
const citation = document.getElementById('citation');


showButton.addEventListener('click', function() {
    citation.style.display = 'block';  
});

hideButton.addEventListener('click', function() {
    citation.style.display = 'none';
});

console.log()