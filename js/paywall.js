// Obituary = Avis de deces

let obituary = "C'est avec un grand chagrin que nous annonçons le décès de Gertrude, une autruche extraordinaire qui a fait vibrer le monde de l'autrucherie avec sa grâce inégalée et ses talents impressionnants.Gertrude, née avec un flair inné pour la danse de la plume et une passion dévorante pour la course à grandes enjambées, a toujours été une source d'inspiration pour ses congénères. Elle a passé sa vie à explorer les vastes étendues de savane, à enseigner à ses petits la danse de l'accouplement et à courir à des vitesses que même les guépards admiraient.Elle laisse derrière elle un héritage de plumes éblouissantes et de pas de danse gracieux qui resteront gravés dans le sable du désert. Ses amis plumeux se souviendront toujours de ses clins d'œil malicieux et de son talent inégalé pour esquiver les prédateurs avec style.Gertrude a rencontré son destin tragique lors d'un concours impromptu de danse avec une bande de gnous. Malheureusement, une série de pirouettes audacieuses a conduit à une collision malencontreuse avec un acacia, mettant ainsi fin à sa vie tout aussi spectaculaire qu'elle l'a vécue.Elle sera profondément regrettée par ses compagnons de plumes, amis à plumes, et bien sûr, par ses admirateurs humains qui ont toujours été ébahis par sa grâce unique.Adieu, Gertrude, que le vent porte tes plumes vers des horizons nouveaux et que tu danses éternellement dans les vastes plaines du paradis des autruches."

const ob = document.getElementById("obituary")
const btnMoney = document.getElementById("btn-money")
const countMoney = document.getElementById("count-money")
const money = document.getElementById("money")
const noMoney = document.getElementById("no-money")
const paywall = document.getElementById("paywall")
const pognon =document.getElementById("flouz")

let obSlice = obituary.slice(0, 900)
ob.innerHTML = obSlice
let state = true;
noMoney.style.display= "none"
let valeur = 0
let prix = 100
countMoney.innerHTML = valeur 

btnMoney.addEventListener("click", function(){
    if (state) {
        ob.innerHTML = obituary
        this.innerHTML = "J'ai plus de flouz ! "
        pognon.innerHTML = "Je me désabonne ! "
        valeur += prix
        countMoney.innerHTML = valeur 
        money.style.display = "none"
        paywall.style.display = "none"
        noMoney.style.display = "block"
        console.log('ok') 
        state = false
    }else{
        ob.innerHTML= obSlice
        this.innerHTML="100€/l'article"
        pognon.innerHTML = "Aboule le fric !"
        paywall.style.display = "block"
        money.style.display = "block"
        noMoney.style.display = "none"
        state = true
    }
})