// 3. Declare a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

let message = "Learning is fun 100";
let chars = message.match(/[a-zA-Z]/g); //string fetched
let finalRes = chars.join("").toUpperCase()
console.log(finalRes);
