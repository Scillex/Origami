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

// introduction.html, basic-foundations.html
if (currentPage.includes('introduction.html') || currentPage.includes('basic-foundations.html')) {
    // Table of contents
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(
            "#origins-and-etymology, #ancient-roots-china-and-early-japan, #development-within-japanese-culture, #the-edo-period-formalization-and-popularization, #early-written-records, #western-influence-and-globalization, #modern-origami-and-its-masters, #artistic-and-technical-innovations, #beyond-art-scientific-and-technological-applications, #therapeutic-benefits, #extended-definition-creativity-and-personal-interpretation, #symbols-and-meanings-the-crane-and-beyond, #origami-an-accessible-and-universal-art, #the-importance-of-diagrams-a-universal-visual-language, #conclusion"
        );
        const navLinks = document.querySelectorAll(".table-of-contents li a");
    
        function updateActiveSection() {
            let currentSection = null;
            let minDistance = Infinity;
            
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const visibleHeight = Math.max(0, rect.bottom - Math.max(rect.top, 0)); // Hauteur visible de l'élément
               
                // Vérifier si l'élément est au moins partiellement visible avec plus de 40px
                if (visibleHeight > 40 && rect.top < minDistance) {
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