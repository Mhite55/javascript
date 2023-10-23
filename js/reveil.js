// ici on stock dans des variables les span qui permettront d'afficher les variables
const minute = document.getElementById("minutes")
const hours = document.getElementById("hour")
const inputMinute = document.getElementById("input-min")
const inputHours = document.getElementById("input-heure")
const btn = document.getElementById("btn")
const alarmSignal = document.getElementById("alarmSignal")
const msgAlarm = document.getElementById("msg")

//Ici on stock les variable qui afficheront les heure et les minutes ainsi permettre
//la permutation apres la 60ème seconde, pour redevenir 0
let minuteValue = 0
let hoursValue = 0
let alarmHours = null
let alarmMinute = null

// Ici le setinterval va appeler un fonction anonyme qui incrémante de 1 la variable minutes
// toutes le secondes soit 1000 milisecondes
setInterval(function(){

    minuteValue++ // augmente de 1 à chaque 1000ms soit 1 seconde 

    // Ici dans cette condition quand les minutes atteignent 60 secondes, elle repassent
    // à zero

    if(minuteValue >= 60){
        minuteValue = 0
        hoursValue++
    }

    // Même chose qu'au dessus mais pour les heures

    if(hoursValue >= 24){
        hoursValue = 0
    }

    if (alarmMinute != null && alarmHours != null){
        if(minuteValue >= alarmMinute && hoursValue >= alarmHours){
            msgAlarm.classList.toggle("visible")
            alarmSignal.style.display = "none"
        }
    }
    // Ici nous avons deux Ecritures diffirentes mais au resultat identiques
    // pour afficher un zero "fictif" quand les seconde sont entre 0 et 9 

    //Ecriture Normale
    // if (minuteValue < 10){
    //     minute.innerHTML = "0" + minuteValue
    // }else{
    //     minute.innerHTML = minuteValue
    // }

    // Ici on injecte les valeur dans les span pour l'affichage notre Magnifique plaisir

    //Ecriture Ternaire
    minute.innerHTML = minuteValue < 10 ? "0" + minuteValue : minuteValue

    hours.innerHTML = hoursValue

},1000)


btn.addEventListener("click" , function(){
    if (inputHours.value >= 0 && inputHours.value < 24 && inputMinute.value < 60 && inputMinute.value >= 0){
        alarmSignal.style.display = "inline"
        alarmHours = inputHours.value
        alarmMinute = inputMinute.value
    }else{
        console.error("Allume ton écran =)");
    }
    inputHours.value = ''
    inputMinute.value = ''
})

