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

function deplacementIndex(){
let image = document.getElementById("banner-img");
let texte = document.getElementById("banner-tagline");


image.src = slides[currentSlideIndex].image;
texte.innerHTML = slides[currentSlideIndex].tagLine;
document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot_selected"));
document.querySelectorAll(".dot")[currentSlideIndex].classList.add("dot_selected");

}
flecheGauche.addEventListener("click", () =>{
    currentSlideIndex=(currentSlideIndex-1);
    if(currentSlideIndex<0){   
        currentSlideIndex=slides.length-1;
    }
    deplacementIndex();
});


flecheDroite.addEventListener("click", () =>{
    currentSlideIndex=(currentSlideIndex+1);
    if(currentSlideIndex>slides.length-1){
        currentSlideIndex=0;
    }
    deplacementIndex();
});