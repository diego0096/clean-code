// Ambito global
let greeting = "Hello World!";

function greet() {
    console.log(greeting)
}

greet()

// Ambito local
function greet2() {
    let greeting = "Hello World!";
    console.log("Saludo desde la función", greeting);
}

greet2();
console.log(greeting);

// Ambito de bloque
{
    let greeting = "Hello World!";
    var lang = "English";
    console.log(greeting)
}

console.log(lang);
console.log(greeting);

// Ambito estatico
const age = 28;

function printAge() {
    console.log(age);
}

function mainApp() {
    const age = 26;
    printAge();
}

mainApp();