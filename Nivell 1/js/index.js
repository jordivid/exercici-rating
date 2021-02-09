/* Hover per als cors, s'omplen fins allà on hi hagi el punter i es buiden la resta.
   El click anula el hover. */
window.addEventListener("load", function(e) {
    ponerHover();
});

function ponerHover() {
    let hearts = document.getElementsByClassName("heart");
    for(i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener("mouseover", omplir);
        hearts[i].addEventListener("mouseout", buidar);
        hearts[i].addEventListener("click", pinchar);
    }
}

function pinchar(e) {
    omplir(e);
    quitarHover();
}

/* S'anula el hover i es modifica el click en els cors, ja que aquest últim és
   l'event que determinarà que s'omplin o es buidin. */
function quitarHover() {
    let hearts = document.getElementsByClassName("heart");
    for(i = 0; i < hearts.length; i++) {
        hearts[i].removeEventListener("mouseover", omplir);
        hearts[i].removeEventListener("mouseout", buidar);
        hearts[i].removeEventListener("click", pinchar);
        hearts[i].addEventListener("click", conmutar);
    }
}

/* S'omple els cors fins allà on s'hagi fet hover o click. */
function omplir(e) {
    let hearts = document.getElementsByClassName("heart");
    for(i = 0; i < hearts.length; i++) {
        hearts[i].src = "img/filledheart.png";
        if(hearts[i].id == e.target.id) break;
    }
}

/* Es buida tots els cors. */
function buidar(e) {
    let hearts = document.getElementsByClassName("heart");
    for(i = 0; i < hearts.length; i++) {
        hearts[i].src = "img/emptyheart.png";
        if(hearts[i].id == e.target.id) break;
    }
}

/* S'omple els cors fins aquell os s'ha fet click i es buida la resta. */
function conmutar(e) {
    let hearts = document.getElementsByClassName("heart");
    let trobat = false;

    for(i = 0; i < hearts.length; i++) {
        if (trobat) {
            hearts[i].src = "img/emptyheart.png";
        } else {
            hearts[i].src = "img/filledheart.png";
            if(hearts[i].id == e.target.id) {
                trobat = true;
            }
        }
    }    
}