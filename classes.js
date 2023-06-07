// Antes de ES6
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function(){
    return "Hello I am " + this.name;
}

var person = new Person("Diego");
console.log(person.name);
console.log(person.greet());

// Con ES6
class Cat {
    constructor(cat) {
        this.name = cat
    }

    greet() {
        return "Hello I am a cat an my name is " + this.name;
    }
}
const cat = new Cat("Oliver")
console.log(cat.name);
console.log(cat.greet());

// Clase hijo
function Developer(name) {
    this.name = name;
}

Developer.prototype = Object.create(Person.prototype)

Developer.prototype.writeCode = function(coffee) {
    if(coffee) console.log("I am working in a feature");
    else console.log("I need coffe, please!")
};

var dev = new Developer("Diego");
dev.greet();
dev. writeCode();

//
class Person2 {
    constructor(person) {
        this.name = person;
    }

    greet() {
        console.log(`Hello I am ${this.name}`);
    }
}

// Clase hijo de Person2
class Developer extends Person2 {
    constructor(name) {
        super(name);
    }

    writeCode(coffee) {
        coffee ? console.log('I am developing a new feature') : console.log('I need coffee, please');
    }
}

const dev = new Developer('Felipe');
dev.greet();
dev.writeCode(true);