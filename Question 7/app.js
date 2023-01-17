// 7. Use lastIndexOf to determine the position of the last occurrence of a word udemy.

let arr = ["unacademy", "udemy", "pw skills", "byjus", "udemy", "coursera", "edureka", "coursera"];
console.log("This is the last Occurence of udemy at index "+arr.lastIndexOf("udemy"));
console.log("The First Occurence of udemy at index "+((arr.length - 1)-arr.reverse().lastIndexOf("udemy")));

