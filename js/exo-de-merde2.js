let listEleve = [ "Antonin", "Clarisse", "Dylan", "Grégory", 
"Jérome", "Johan" , "Jonathan", "Pierre", "Raphael", "Steven"]

const listInterroge = document.getElementById('list-inter')
const list = document.getElementById('list')
const btn = document.getElementById('btn')

let listEleveCopie = [...listEleve]

let nbrList = 10

for (let index = 0; index < listEleve.length; index++) {
    list.innerHTML += `<li class="list-a-la-con">${listEleveCopie[index]}</li>`
}

btn.addEventListener('click', function(){
        let ramdom =  Math.floor(Math.random() * (nbrList - 0) + 0)
        listInterroge.innerHTML = listEleveCopie[ramdom]
        // on utilise la methode splice : le premier argument est l'index de élément à enlever
        // le deuxiéme argument est nombre d'element à enlever à partir de l'index
        listEleveCopie.splice(ramdom, 1)
        list.innerHTML = ""
        nbrList--
        if (nbrList == 0){
            alert('liste fini')
        }
        for (let index = 0; index < listEleveCopie.length; index++) {
            list.innerHTML += `<li class="list-a-la-con">${listEleveCopie[index]}</li>`
        }
        if (listEleveCopie.length === 0 ){
            listEleveCopie = [...listEleve]
            nbrList = 10
        }
        console.log(listEleveCopie)
        console.log(ramdom)
        console.log(nbrList)
})


