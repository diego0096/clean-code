// Parametro de number
function getDouble(number) {
    return number * 2;
}

getDouble(10);

// Parametro defecto
function greet(person = "strange") {
    console.log("Hello " + person);
}

greet();
greet("Diego");

// Spread operator o rest
// Sin usar rest
function add(x, y) {
    // return x + y;
    console.log(x + y)
}

add(1, 2, 3, 4, 5);

// Usando rest
function add2(...args) {
    console.log(args.reduce((prev, current) => prev + current, 0))
}

add2(1, 2, 3, 4, 5);

function add3(x, y, ...args) {
    console.log(args)
}

add3(1, 2, 3, 4, 5);

const course = {
    title: "javascript Definitivo",
    content: "Todo lo que necesitas saber",
}

const courseCloned = Object.assign({}, course);
const spreadCourseCloned = {...course};

// console.log(courseCloned)
console.log(spreadCourseCloned);

courseCloned.title = "Js changed";
console.log(courseCloned)
console.log(course)

//
const numbers = [1, 2, 3];

const cloneNumbers = numbers.slice();
const spreadClonedNumbers = [...numbers];;

console.log(spreadClonedNumbers)

//
const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const newnumbers = [...numbersA, ...numbersB];
console.log(newnumbers);