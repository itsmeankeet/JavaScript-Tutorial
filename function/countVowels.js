// function countVowels(str) {
//     let count = 0;
//     // for(const char of str) {
//     //     console.log(char);
//     // }this loop display all the characters of the string one by one
//     for(const char of str) {
//         if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }


//lets create an arrow function for the same work
let count = 0;
 let countVowels = (str) => {
    for(const char of str) {
        if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    console.log(count);
 }