// // 28. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }        
    }  
    if (isPrime) {
        console.log(i);
    }
}
