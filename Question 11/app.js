//11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()


// - 4 > 3 -> false
console.log(-4 > 3);

// - 4 >= 3 -> false
console.log(-4 >= 3);

// - 4 < 3 -> true
console.log(-4 < 3);

// - 4 <= 3 -> true
console.log(-4 <= 3);

// - 4 == 4 -> false
console.log(-4 == 4);

// - 4 === 4 -> false
console.log(-4 === 4);

// - 4 != 4 -> true
console.log(-4 != 4);

// - 4 !== 4 -> true
console.log(-4 != 4);

// - 4 != '4' ->true
console.log(-4 != '4');

// - 4 == '4' -> false
console.log(-4 == '4');

// - 4 === '4' -> false
console.log(-4 === '4');

// - Find the length of python and jargon and make a falsy comparison statement.
let python = "python";
let jargon = "jargon";

console.log(`
    ${python.length} is the length of python
    ${jargon.length} is the length of jargon
    Is python euals to jargon? ${python === jargon}
`);