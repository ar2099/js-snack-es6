// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.

var squadre = 
[
        {
            nome : "Pantegane viola",
            puntiFatti : 0,
            falliSubiti : 0,
        },

        {
            nome: "Sorci verdi",
            puntiFatti: 0,
            falliSubiti: 0,
        },

        {
            nome: "Dragi neri",
            puntiFatti: 0,
            falliSubiti: 0,
        },

        {
            nome: "Orsi gialli",
            puntiFatti: 0,
            falliSubiti: 0,
        },
        
]

function casualPunti(){
 return   Math.floor(Math.random()*40 + 7)
}

function casualFalli() {
    return Math.floor(Math.random() * 15 + 25)
}


const bottone = document.getElementById("bottone")

bottone.addEventListener("click", function(){
for(i = 0; i < squadre.length; i++){
    let squadra = squadre[i]

    squadra.falliSubiti = casualFalli();
    squadra.puntiFatti = casualPunti();
}
console.log(squadre)

let squadre2 = []

for (i = 0; i < squadre.length; i++) {
let squadra = squadre[i]

const {nome, falliSubiti} = squadra;

squadre2.push(
    {
        nome,
        falliSubiti
    }
)
}
console.log(squadre2)

})


