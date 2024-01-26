//method use in array
//arrayname.forEach(callbackFunction) {

//}

//this is call back function
// function sayHello() {
//     console.log("Hello World");
// }
// function myfunc(sayHello) {
//     return sayHello;
// }




// let arr = [1, 2, 4, 5, 6, 7, 8];

// arr.forEach(function printVal(val) {// value at each fn
//     console.log(val);
// });


//as Arrow Function

// let arr = ['gces', 'pec', 'ncit', 'wrc'];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });//only used for array not in string
// higher order function or method are those function which take other fn as parameters or retuturn function as a parameter


//print square of a number using for each
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach((val) => {
//     console.log("Square of ", val, " is ",val * val);
// });


//Map method
//used to traverse and can operate in any element of array and create a new arrray as output
//arr.map(val,index,arr);
// let arr = [1, 2, 3, 4, 5, 6];
// let newarr = arr.map((val) => {
//     return val;
// });
// console.log(newarr);
// console.log("Adding 1 in every index in an arrya:");
// newarr = arr.map((val) => {
//     return (val + 1);
// });
// console.log(newarr);



//Filter method
// //travers all array and filter some value based on condt
// let arr = [1,2,3,4,5,6,7,8,9];

// let newarr = arr.filter((val) => {
//     return(val % 2 == 0);
// });
// console.log(newarr);


//reduce method
//return single value from all the value of the array 
//such as average ad sum of all number
// let arr = [1,2,3,4];
// let sum = arr.reduce((result, currentValue) => {
//     return(result + currentValue);
// });
// console.log(sum);
//find greater
let arr = [1,2,3,4,5,6,7,8,9];
let greater = arr.reduce((previous, currentValue) => {
    if(previous > currentValue) {
        return previous;
    }
    return currentValue;
});
console.log(greater);