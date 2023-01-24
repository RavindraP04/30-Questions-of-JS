// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//     - Sort the array and find the min and max age
console.log(ages.sort());
console.log("Min Age " + ages[0]);
console.log("Max Age " + ages[ages.length-1]);

// Find the median age(one middle item or two middle items divided by two)
let median = (ages[ages.length/2] + ages[(ages.length/2)+1])/2;
console.log(median);

// Find the average age(all items divided by number of items)
let sumOfAges = 0;
ages.forEach(item => {
    sumOfAges += item;
})
let avg = sumOfAges/ages.length;
console.log(`Average is ${avg}`);

// Find the range of the ages(max minus min)
let range = ages[ages.length-1] - ages[0];
console.log(`range is ${range}`);

//Compare the value of (min - average) and (max - average), use abs() method
const minAverage = Math.abs(ages[0] - averageAge);
const maxAverage = Math.abs(ages[ages.length - 1] - averageAge)
if (minAverage > maxAverage) {
    console.log("min-average is greater than max-average")
} else if (minAverage < maxAverage) {
    console.log("max minus average is greater than min-average");
} else {
    console.log("Both are equal");
}
