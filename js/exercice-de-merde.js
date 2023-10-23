const imgDeMerdeUn = document.getElementById("photo-de-merde-1")
const imgDeMerdeDeux = document.getElementById("photo-de-merde-2")
const rangeInput = document.getElementById("rangeInput")

rangeInput.value = 0

rangeInput.addEventListener("input", function(){
   console.log(rangeInput.value)
   let valeurRange = rangeInput.value;
   imgDeMerdeUn.style.opacity = 1 + valeurRange / 10
   console.log(1 + valeurRange / 10)
   imgDeMerdeDeux.style.opacity = 1 - valeurRange / 10
})



// // Sélectionnez l'élément input range et l'image

// // Écoutez les événements de changement de l'input range
// rangeInput.addEventListener("input", function() {
//     // Obtenez la valeur de l'input range

//     // Calculez l'opacité en fonction de la valeur (vous pouvez ajuster la formule selon vos besoins)
//     const opacite = valeurRange / 100;
//     opacite = valeurRange / -100;
//     // Appliquez l'opacité à l'image
//     imgDeMerdeUn.style.opacity = opacite;
//     imgDeMerdeDeux.style.opacity = opacite; 
// });

