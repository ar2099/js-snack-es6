const nomi = ["Beppe", "Nicola", "Luca", "Giovanni", "Leonida", "Paolo", "Marco", "Leonardo"]

const bottone = document.getElementById("invia")

const bottone2 = document.getElementById("invia2")

const inputMin = document.getElementById("min")

const inputMax = document.getElementById("max")

const inputMin2 = document.getElementById("min2")

const inputMax2 = document.getElementById("max2")


bottone.addEventListener("click",
function(){
    document.getElementById("stampa").innerHTML = ""
    
   
    nomi.forEach(ciclo)
})

function ciclo(oggetto, i){
    
    if ((Number(inputMin.value) <= i) && (Number(inputMax.value) >= i)) {
      
       document.getElementById("stampa").innerHTML += `<p>${oggetto}`
    }
    
}

function filtro(oggetto, i) {

    if ((Number(inputMin2.value) <= i) && (Number(inputMax2.value) >= i)) {

        return true
    }
    return false

}

bottone2.addEventListener("click",
    function () {
        
        document.getElementById("stampa2").innerHTML = ""
        let arrayStampa = nomi.filter(filtro)
        for(t = 0; t < arrayStampa.length; t++){
            document.getElementById("stampa2").innerHTML += `<p>${arrayStampa[t]}`
        }
        

        
    })