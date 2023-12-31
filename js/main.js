// HELLO WORLD

const titre = document.querySelector("#hello")
const mcflan = document.getElementById("mcflan")
//const titre = document.getElementById("hello")

titre.innerHTML = " Hello world !! "
console.log(titre)

//Afficher dans un console log
//le texte si celui-ci fait 20 caractères ou pas
//Pour connaitre la taille d'un élément ==> element.length

let banane = "T\'es sourd McFlan, espèce de crème anglaise! "

if( banane.length >= 20 ) {
    console.log(banane)
}

//2ème partie
//Afficher le texte dans un <p> en italique et en gris

// bananasplit.innerHTML = "T\'es sourd McFlan, espèce de crème anglaise ! "
// console.log(bananasplit)

if( banane.length >= 20 ) {
    mcflan.innerHTML = banane
}else {
    mcflan.innerHTML = "Erreur !"
}

//3ème partie

let maths1 = 44
let maths2 = 27
let resultat = maths1 * (maths2 + maths1)
let maths3 = 3 
let resultat2 = maths1 % maths3
console.log(resultat)
console.log(resultat2)

if ( maths1 % 2 == 0){
    console.log("le nombre testé est un nombre paire")
}else{
    console.log("le nombre testé est un nombre impair.")
}

let color = "#ff"

switch(color) {
    case "#ff6b33":
        console.log("tu aime l'orange.")
        break
    case "#55ff33":
        console.log("toi tu aime l'alchool.")
        break
    case "4d00ff":
        console.log("GLOU GLOU GLOU")
        break
    default:
        console.log("Message par defaut!")
}


// LES BOUCLES

for (let pas = 0; pas <= 5; pas++) {
    if (!pas == 0) {
        console.log("J'ai fait " + pas + " pas vers le nord")
    }
}

let stopp = 4512

for (let brasse = 0; brasse <= 10000; brasse++) {
    if (!brasse == 0) {
        console.log("J'ai fait des " + brasse + " brasse(s) pas vers le nord")
    }
    if (brasse == stopp) {
        break   
    }
}

// LES FONCTIONS

function carre(nbr) {
    return nbr ** 2
}

let nbr_au_carre = 10
let resultat_carre = carre(nbr_au_carre)
console.log(resultat_carre)

if ( carre(nbr_au_carre) > 90 ){
    console.log("le carré le 10 est supérieur à 90")
}

let mon_mood = " HEUREUX !!!! "
let mon_mood_trois_fois = mon_mood.repeat(3)
console.log(mon_mood_trois_fois)

// EXERCICE

// Le Nombre A et le Nombre B Sont des variables definies
// Avant la fonction
// faire une fonction qui multiplie un nombreA et un nombreB 
// et qui le retourne dans une variable 'mult'
// afficher mult dans la console log 

let nbra = 41
let nbrb = 17

function mult(nbra, nbrb) {
    return nbra * nbrb
}

 let result= mult(nbra, nbrb)
console.log(result)


function div(nbra, nbrb) {
    if (nbrb != 0){
        return nbra / nbrb
    }else{
        return Infinity
    }
} 
console.log(div(nbra,nbrb))

//Version nul

function isEven(nbr){
    if ( nbr % 2 == 0){
        return true
    }else{
        return false
    }
}

//version optimisée

function isEven(nbr) {
    return nbr %2 == 0
}

console.log(isEven(47))

//Changement de classe

//GetElementsByClassName -> retourne toujour un tableau, même si il y a qu'un seule élément
//const red = document.getElementsByClassName('red')[0]
const red = document.querySelector('.red')
red.className = "blue" //à évitér
red.classList.add("gras")
red.classList.remove('blue')
red.classList.add("red")
console.log (red)

//EXERCICE

//Faire un fonction replaceC(elements_a_cible, ancienne_class, la_nouvelle_class)

//exemple :

//<a href="#" class="btn btn-primary">Envoyer</a>

//replaceC(<a>, "btn-primary", "btn-danger")

// <a href="#" class="btn btn-danger">Envoyer</a>

//faire le corps de la fonction, cette fonction ne retourne rien 
// function replaceC(target, oldClass, newClass) {
//     const t = document.querySelector(target)
//     if (oldClass !== newClass){
//         if(t.classList.contains(oldClass)){
//             t.classList.remove(oldClass)
//             t.classList.add(newClass)
//         }else{
//             console.error("La classe n'existe pas dans l'element" + target)
//         }
//     }else{
//         console.error("Vous voulez remplacer la class par elle même. ")
//     }
// }
// replaceC("#exo", "blue", "green")

/* 
Créez une fonction qui : 
    demande la saisie d'un rayon ;
    retourne la surface du cercle de ce rayon
*/

function cercleCalc(rayon, isCircle){
    if (isCircle){
        return Math.PI * ( rayon ** 2 ) 
    }else{
        return  rayon ** 2 // c'est un carré
    }
}
console.log(Math.PI);
console.log(cercleCalc(5))

//EVENEMENTS 

const likes = document.getElementById('likes')
const btn = document.querySelector('.btn');
let likesNumber = 0

btn.addEventListener("click", function() {
    likesNumber++
    likes.innerHTML = likesNumber
    this.classList.toggle("pink")
    this.classList.toggle("chartreuse")
})

//Exercice fait un mode jour et nuit

const mode = document.querySelector('.mode')
const body = document.querySelector('body')

mode.addEventListener("click", function(){
    body.classList.toggle("dark")
})

// Timers
// Le setTimeout dans cette exemple au bout de 5 secondes (5000ms)
// La fonction anonyme sera traitée ( le console log envoyé )
setTimeout(function(){
    console.log("coucou !!")
}, 5000);

setInterval(function(){
    console.log("Exterminate !!!")
}, 2000);

// faire un lorem ipsum dans un <p> et toute les 3 seconde il changera de taille 
// la taille initiale et de 1 em et la taille d'aprés est 3 em et vice versa

const text= document.querySelector("#text-lorem")

    setInterval(function(){
        text.classList.toggle("grossisement")
    }, 3000);
