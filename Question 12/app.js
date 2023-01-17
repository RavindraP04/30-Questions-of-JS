// 12. Use the Date object to do the following activities
let date = new Date();

//     - What is the year today?
console.log("Current year is "+ date.getFullYear());

//     - What is the month today as a number?
console.log("Current month is "+(date.getMonth()+1)+"st");

//     - What is the date today?
console.log("Current date is "+date.getDate());

//     - What is the day today as a number?
console.log("Current day is "+date.getDay());

//     - What is the hours now?
console.log("Current hour is "+date.getHours());

//     - What is the minutes now?
console.log("Current minute is "+date.getMinutes());

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const miliSeconds = date.getTime(); // this method will return milliseconds elapsed from Jan 1st 1970
const seconds = miliSeconds / 1000;
console.log(`Number of  seconds elapsed from Jan 1, 1970 is ${seconds}`);