const imgDeMerdeUn = document.getElementById("photo-de-merde-1")
const imgDeMerdeDeux = document.getElementById("photo-de-merde-2")
const rangeInput = document.getElementById("rangeInput")

rangeInput.addEventListener("input", function(event){
   console.log(event.target.value)
   let valeurRange = event.target.value;
   const opacite = valeurRange * 10;
   if (event.target.value >= -100 && event.target.value <= 0 ) {
    opacite = imgDeMerdeUn.style.opacity
   }
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

