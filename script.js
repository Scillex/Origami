const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-hamburger');

// Afficher ou cacher le menu au clic sur le hamburger
hamburger.addEventListener('click', (e) => {
    menu.classList.toggle('active'); // Alterner la classe active
    e.stopPropagation(); // Empêcher la propagation du clic au document
});

// Cacher le menu au clic n'importe où sur le document
document.addEventListener('click', () => {
    menu.classList.remove('active'); // Supprimer la classe active
});

// Empêcher la fermeture si on clique sur le menu lui-même
menu.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêcher la propagation du clic au document
});
