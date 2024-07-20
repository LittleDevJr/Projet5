const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let flecheGauche = document.getElementById("left");
let flecheDroite = document.getElementById("right");
let currentSlideIndex = 0;


/*
function updateSlide() {
    const slideImage = document.getElementById("banner-img");
    const slideTagLine = document.getElementById("banner-tagline");

    slideImage.src = slides[currentSlideIndex].image;
    slideTagLine.innerHTML = slides[currentSlideIndex].tagLine;

    // Réinitialise toutes les classes dot à dot
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('dot_selected'));

    // Ajoute la classe dot_selected à la diapositive actuelle
    document.querySelectorAll('.dot')[currentSlideIndex].classList.add('dot_selected');
}

flecheDroite.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide();
});

flecheGauche.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

document.addEventListener("DOMContentLoaded", () => {
    updateSlide();
});
*/


function deplacementIndex(){
let image = document.getElementById("banner-img");
let texte = document.getElementById("banner-tagline");


image.src = slides[currentSlideIndex].image;
texte.innerHTML = slides[currentSlideIndex].tagLine;
document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot_selected"));
document.querySelectorAll(".dot")[currentSlideIndex].classList.add("dot_selected");

}
flecheGauche.addEventListener("click", () =>{
    alert("fleche gauche appuyée");
    currentSlideIndex=(currentSlideIndex-1);
    if(currentSlideIndex<0){   
        currentSlideIndex=3;
    }
    deplacementIndex();
});


flecheDroite.addEventListener("click", () =>{
    alert("fleche droite appuyée");
    currentSlideIndex=(currentSlideIndex+1);
    if(currentSlideIndex>3){
        currentSlideIndex=0;
    }
    deplacementIndex();
});