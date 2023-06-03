const getResult = () => "Results Diego";

console.log(getResult());

// Sin arrow
[1, 2, 3,].map(
    function(n) {return n * 2}
)

// Con arrow
[1, 2, 3].map((n) => n *2);

// Trabajando con this
const counter = {
    number: 0,
    increse() {
        setInterval(() => console.log(++this.number), 1000)
    }
}
counter.increse();

//
const counter2 = {
    number: 0,
    increse() {
        setInterval(function () {
            console.log(++this.number);
        }.bind(this), 1000)
    }
}
counter2.increse();