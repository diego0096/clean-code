var greet = "Hello";

(
    function() {
        console.log(greet);
        var greet = "Hi";
        console.log(greet);
    }
)();

greet();

function greet() {
    let greeting = "Hello World!";
    console.log(greeting);
}

var greet2 = "Hello";

(
    function() {
        var greet2;
        console.log(greet2);
        var greet2 = "Hi";
        console.log(greet2);
    }
)();