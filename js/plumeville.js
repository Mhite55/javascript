const bloc = document.getElementById("bloc")
const chaine = "Il était une fois dans la ville de Plumeville, une autruche nommée Ollie l'Ostrich qui avait un côté obscur. Ollie était connue sous le nom d'Ollie \"La Griffe\", une autruche gangster redoutée dans le monde interlope des oiseaux. Elle portait un chapeau à larges bords et des plumes de couleur sombre qui lui donnaient un air mystérieux\.\
\
Un jour, un célèbre détective privé autruche du nom de Jupiter Joe reçut un appel urgent. Une autruche paniquée avait besoin de son aide. Cette autruche était Gloria, la belle et innocente femme de l'oiseau le plus riche de la ville, Harold Hawk. Gloria croyait que son mari avait été impliqué dans des activités criminelles avec Ollie \"La Griffe\". Elle supplia Jupiter Joe de découvrir la vérité\.\
\
\Jupiter Joe était connu pour sa sagacité et son flair pour les mystères. Il accepta l'affaire et commença son enquête. Au fil de ses recherches, il découvrit des preuves suggérant que Harold Hawk était en effet mêlé à des activités illégales. Il semblait être le cerveau derrière les opérations de contrebande d'œufs d'autruche\.\
\
Pendant que Jupiter Joe creusait plus profondément, il se rendit compte que la mystérieuse autruche gangster, Ollie \"La Griffe\", était en réalité l'ancienne petite amie de Harold Hawk. Elle avait décidé de prendre le contrôle de son empire criminel après leur rupture\.\
\
\La tension monta alors que Jupiter Joe se rapprochait de la vérité\. Ollie \"La Griffe\" commença à le traquer pour l'empêcher de découvrir ses sombres secrets. Jupiter Joe dut user de toutes ses compétences de détective pour échapper aux pièges tendus par Ollie\.\
\
Finalement, grâce à son intelligence et son courage, Jupiter Joe réussit à exposer les activités criminelles de Harold Hawk et à mettre un terme aux agissements d'Ollie \"La Griffe\". Il était temps que la justice triomphe\.\
\
La ville de Plumeville était enfin débarrassée de ces criminels notoires, et Jupiter Joe était salué comme un véritable héros. Il avait fait de la ville un endroit plus sûr pour tous les oiseaux, et il avait prouvé que la vérité pouvait triompher, même dans les situations les plus sombres\.\
\
Ainsi se termina l'histoire de Jupiter Joe, le détective privé autruche, qui avait mis fin à la carrière criminelle d'une autruche gangster redoutable et ramené la paix à Plumeville."

// let nb_car = chaine.length

// let tableau = chaine.split("");

// texte = new Array;

// let txt = '';
// let nb_msg = nb_car - 1;

// for (i=0; i<nb_car; i++) {
//     texte[i] = txt+tableau[i];
//     txt = texte[i];
// }

// actual_texte = 0;
// function changeMessage(){
//     bloc.innerHTML = texte[actual_texte];
//     actual_texte++;
//     if(actual_texte >= texte.length)
//     actual_texte = nb_msg;
//     }

// setInterval("changeMessage()",100) /* la vitesse de defilement (plus on a une valeur faible plus 
// texte s'affiche rapidement) */


index = 0
//let timer est pour detruire le setInterval
let timer = setInterval(() => {
    if (index < chaine.length){
        bloc.innerHTML += chaine[index]
        index++ 
    }else{
        timer = null
    }
}, 30)



// function addCharacter(){
//     bloc.innerHTML += chaine[index]
//     index++
//     setTimeout(addCharacter,30)
// }

// addCharacter()