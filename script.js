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

document.addEventListener('DOMContentLoaded', function() {
    const particules = document.querySelectorAll('.particule');
    const modal = document.getElementById('particule-modal');
    const closeBtn = document.querySelector('.close-btn');
    const particuleTitle = document.getElementById('particule-title');
    const particuleExplanation = document.getElementById('particule-explanation');

    const particuleData = {
        "の": {
            title: "Particule の",
            explanation: "La particule の est utilisée pour indiquer la possession ou l'appartenance. Elle est souvent traduite par 'de' ou 'du' en français. Elle peut également être utilisée pour nominaliser des verbes ou des adjectifs."
        },
        "と": {
            title: "Particule と",
            explanation: "La particule と est utilisée pour indiquer une action commune ou pour énumérer des éléments."
        },
        "や": {
            title: "Particule や",
            explanation: "La particule や est utilisée pour énumérer des exemples."
        },
        "か": {
            title: "Particule か",
            explanation: "La particule か est utilisée pour poser des questions ou des alternatives."
        },
        "なり": {
            title: "Particule なり",
            explanation: "La particule なり est utilisée pour indiquer une transformation ou un changement."
        },
        "に": {
            title: "Particule に",
            explanation: "La particule に est utilisée pour indiquer la direction ou le but."
        },
        "で": {
            title: "Particule で",
            explanation: "La particule で est utilisée pour indiquer le lieu ou le moyen."
        },
        "へ": {
            title: "Particule へ",
            explanation: "La particule へ est utilisée pour indiquer la direction."
        },
        "を": {
            title: "Particule を",
            explanation: "La particule を est utilisée pour indiquer l'objet direct."
        },
        "から": {
            title: "Particule から",
            explanation: "La particule から est utilisée pour indiquer l'origine ou la cause."
        },
        "まで": {
            title: "Particule まで",
            explanation: "La particule まで est utilisée pour indiquer la limite ou la fin."
        },
        "が": {
            title: "Particule が",
            explanation: "La particule が est utilisée pour indiquer le sujet."
        },
        "より": {
            title: "Particule より",
            explanation: "La particule より est utilisée pour indiquer la comparaison."
        },
        "だけ": {
            title: "Particule だけ",
            explanation: "La particule だけ est utilisée pour indiquer 'seulement'."
        },
        "のみ": {
            title: "Particule のみ",
            explanation: "La particule のみ est utilisée pour indiquer 'seulement'."
        },
        "しか": {
            title: "Particule しか",
            explanation: "La particule しか est utilisée pour indiquer 'seulement'."
        },
        "ばかり": {
            title: "Particule ばかり",
            explanation: "La particule ばかり est utilisée pour indiquer 'seulement'."
        },
        "くらい": {
            title: "Particule くらい",
            explanation: "La particule くらい est utilisée pour indiquer 'environ'."
        },
        "ころ": {
            title: "Particule ころ",
            explanation: "La particule ころ est utilisée pour indiquer 'environ'."
        },
        "ほど": {
            title: "Particule ほど",
            explanation: "La particule ほど est utilisée pour indiquer 'environ'."
        },
        "など": {
            title: "Particule など",
            explanation: "La particule など est utilisée pour indiquer des exemples."
        },
        "は": {
            title: "Particule は",
            explanation: "La particule は est utilisée pour indiquer le thème."
        },
        "も": {
            title: "Particule も",
            explanation: "La particule も est utilisée pour indiquer 'aussi'."
        },
        "こそ": {
            title: "Particule こそ",
            explanation: "La particule こそ est utilisée pour indiquer 'justement'."
        },
        "さえ": {
            title: "Particule さえ",
            explanation: "La particule さえ est utilisée pour indiquer 'même'."
        },
        "でも": {
            title: "Particule でも",
            explanation: "La particule でも est utilisée pour indiquer 'même si'."
        },
        "よ": {
            title: "Particule よ",
            explanation: "La particule よ est utilisée pour insister."
        },
        "ね": {
            title: "Particule ね",
            explanation: "La particule ね est utilisée pour demander l'accord."
        },
        "な": {
            title: "Particule な",
            explanation: "La particule な est utilisée pour insister."
        },
        "わ": {
            title: "Particule わ",
            explanation: "La particule わ est utilisée pour exprimer l'émotion."
        },
        "ぜ": {
            title: "Particule ぜ",
            explanation: "La particule ぜ est utilisée pour insister."
        },
        "とも": {
            title: "Particule とも",
            explanation: "La particule とも est utilisée pour insister."
        },
        "ぞ": {
            title: "Particule ぞ",
            explanation: "La particule ぞ est utilisée pour insister."
        },
        "さ": {
            title: "Particule さ",
            explanation: "La particule さ est utilisée pour insister."
        },
        "か": {
            title: "Particule か",
            explanation: "La particule か est utilisée pour poser une question."
        },
        "かしら": {
            title: "Particule かしら",
            explanation: "La particule かしら est utilisée pour poser une question."
        },
        "（の）": {
            title: "Particule （の）",
            explanation: "La particule （の） est utilisée pour nominaliser."
        },
        "けれども": {
            title: "Particule けれども",
            explanation: "La particule けれども est utilisée pour indiquer 'mais'."
        },
        "のに": {
            title: "Particule のに",
            explanation: "La particule のに est utilisée pour indiquer 'mais'."
        },
        "ので": {
            title: "Particule ので",
            explanation: "La particule ので est utilisée pour indiquer la cause."
        }
    };

    particules.forEach(particule => {
        particule.addEventListener('click', function() {
            const particuleKey = this.getAttribute('data-particule');
            const data = particuleData[particuleKey];
            if (data) {
                particuleTitle.textContent = data.title;
                particuleExplanation.textContent = data.explanation;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
