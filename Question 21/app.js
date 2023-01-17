//22. Write a program which tells the number of days in a month.

function getDaysInMonth(year, month) {
    const days = new Date(year, month, 0).getDate();
    return days;
}

console.log(getDaysInMonth(2023, 10));

console.log(getDaysInMonth(2022, 2));

