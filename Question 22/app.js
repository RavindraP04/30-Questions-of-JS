//23. Write a program which tells the number of days in a month, now consider leap year.
function getDaysInMonth(year, month) {
    const days = new Date(year, month, 0).getDate();
    return days;
}

console.log(getDaysInMonth(2024, 2));

console.log(getDaysInMonth(2000, 2));

