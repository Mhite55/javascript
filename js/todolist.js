const task = document.getElementById('task')
const scroll = document.getElementById('scroll')
const add = document.getElementById('add')
const list = document.getElementById('list')

let buffer = ""
let tdlArray = []
task.value = ""
add.disabled = true

function creatList(array) {
    list.innerHTML = ""
    for( i of array){
        list.innerHTML += `<li>${i}</li>`
    }
}

task.addEventListener('input', function(event){
    buffer = event.target.value
   console.log(event.target.value) 
   if(event.target.value.length !== 0){
    add.disabled = false
   }else{
    add.disabled = true
   }
})

add.addEventListener('click', function(){
    if (task.value.length !== 0) {
        tdlArray.push(buffer)
        task.value = "" // On vide l'input pour ne pas avoir d'incohérances
        buffer = "" //On vide le buffer pour ne pas avoir d'incohérances 
        console.log(tdlArray)
        add.disabled = true
        creatList(tdlArray)
    }else{
        console.error("Veuillez remplir le champs des tàche sale con")
    }
})

document.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        if (task.value.length !== 0) {
            tdlArray.push(buffer)
            task.value = "" // On vide l'input pour ne pas avoir d'incohérances
            buffer = "" //On vide le buffer pour ne pas avoir d'incohérances 
            console.log(tdlArray)
            add.disabled = true
            creatList(tdlArray)
        }else{
            console.error("Veuillez remplir le champs des tàche sale con")
        }
    }
})