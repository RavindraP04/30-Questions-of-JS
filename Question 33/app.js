// 35. Write a functions which checks if all items are unique in the array.

let string = ["India" , "Pakistan", "Germany", "India", "Britain", "Pakistan", "USA"];

let duplicates = [];
string.forEach(ele => {
    if (!duplicates.includes(ele)) {
        duplicates.push(ele)
    }
})
console.log(`${duplicates}
    Total duplicate items are ${string.length- duplicates.length}
`);