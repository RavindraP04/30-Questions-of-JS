// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0;
let odd = 0;
for (let index = 0; index <= 100; index++) {
    if (index%2 == 0) {
        even += index;
    } 
    else {
        odd += index;
    }
}

console.log(`Sum of Even numbers is ${even}
Sum of Even numbers is ${odd}
`);