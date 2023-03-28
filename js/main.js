// JavaScript pour la pagination
const divs = document.querySelectorAll('.grid__item');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentPage = 1;
let numPerPage = 9;
let numPages = Math.ceil(divs.length / numPerPage);

// Affiche la page spécifiée
function displayPage(page) {
  let start = (page - 1) * numPerPage;
  let end = start + numPerPage;
  for (let i = 0; i < divs.length; i++) {
    if (i >= start && i < end) {
      divs[i].style.display = 'block';
    } else {
      divs[i].style.display = 'none';
    }
  }
}

// Initialise l'affichage à la première page
displayPage(currentPage);

// Ajoute un gestionnaire d'événement au bouton Précédent
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

// Ajoute un gestionnaire d'événement au bouton Suivant
nextButton.addEventListener('click', () => {
  if (currentPage < numPages) {
    currentPage++;
    displayPage(currentPage);
  }
});