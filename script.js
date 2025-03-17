// Vérifier l'URL de la page
const currentPage = window.location.pathname;

// index.html
if (currentPage.includes('index.html')) {
    // Menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-hamburger');

    hamburger.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        e.stopPropagation();
    });

    document.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Furigana Title
    const furigana = document.querySelector('#furigana');
    const title = document.querySelector('#title');

    title.addEventListener('mouseover', () => {
        furigana.style.visibility = 'visible';
    });

    title.addEventListener('mouseout', () => {
        furigana.style.visibility = 'hidden';
    });
}

// introduction.html
if (currentPage.includes('introduction.html') || currentPage.includes('basic-foundations.html')) {
    // Table of contents
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(
            "#what-is-origami, #history-of-origami, #basic-techniques, #types-of-origami, #materials-needed, #getting-started, #conclusion"
        );
        const navLinks = document.querySelectorAll(".table-of-contents li a");
    
        function updateActiveSection() {
            let currentSection = null;
            let minDistance = Infinity;
            
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // On considère uniquement les sections qui sont au moins partiellement visibles
                if (rect.top >= 0 && rect.top < minDistance) {
                    minDistance = rect.top;
                    currentSection = section;
                }
            });
            
            if (currentSection) {
                const id = currentSection.getAttribute("id");
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        }
    
        // Mettre à jour lors du scroll
        document.addEventListener("scroll", updateActiveSection, { passive: true });
    
        // Mettre à jour une première fois au chargement
        updateActiveSection();
    });     
}