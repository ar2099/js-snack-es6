let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },];


let nomiStudenti = []

function maiuscolo(element){
 return  nomiStudenti.push(element.name.toUpperCase())

}

students.forEach(maiuscolo)

console.log(nomiStudenti)

let studentiBravi = []

function voti(element) {
    if(element.grades > 70)
    {return studentiBravi.push(element)}
}

students.forEach(voti)

console.log(studentiBravi)

let studentiPrivilegiati = []

function privilegio(element) {
    if ((element.grades > 70) && (element.id > 120)) { return studentiPrivilegiati.push(element) }
}

students.forEach(privilegio)
console.log(studentiPrivilegiati)
