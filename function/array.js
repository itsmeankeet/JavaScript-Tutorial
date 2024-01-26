function sum(a,b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

const arrowSum = (a,b) => {
    console.log(a+b);
};
console.log(arrowSum); //this arrowSum is a variable but acts ass a function;

console.log(arrowSum(2,3));


const mulArrow = (a,b) => {
    console.log(a*b);
} 


const printHello = () => {
    console.log("Hello World!");
}