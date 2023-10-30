let listEleve = [ "Antonin", "Clarisse", "Dylan", "Grégory", 
"Jérome", "Johan" , "Jonathan", "Pierre", "Raphael", "Steven"]

const list = document.getElementById('list')
const btn = document.getElementById('btn')

let listEleveCopie = []
// list.innerHTML += `<li class="list-a-la-con">${listEleve}</li>`

// function creatList(array) {
//     for( listEleve of array){
//         list.innerHTML += `<li class="list-a-la-con">${listEleve}</li>`
//     }
// }

// listEleve.forEach(noms => {
//     list.innerHTML += `<li class="list-a-la-con">${listEleve[noms]}</li>`
// });

btn.addEventListener('click', function(){
    let random = 0 + Math.floor(10 * Math.random())
    console.log(random)
})

for (let index = 0; index < listEleve.length; index++) {
    list.innerHTML += `<li class="list-a-la-con">${listEleve[index]}</li>`
}

function displayList(){
    for (let i = 0; i < listEleve.length; i++) {
        listEleveCopie[i] = listEleve[i];
        console.log(listEleveCopie)
    }
}
