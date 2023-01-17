
// 17. Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

const date = new Date();

const year = date.getFullYear();

let month = date.getMonth() + 1;
month = addZero(month);

let dateToday = date.getDate();
dateToday = addZero(dateToday);

let hours = date.getHours();
hours = addZero(hours);

let mins = date.getMinutes();
mins = addZero(mins)



//- YYYY-MM-DD HH:mm
const dateFormat1 = `${year}-${month}-${dateToday} ${hours}:${mins}`;
//- DD-MM-YYYY HH:mm
const dateFormat2 = `${dateToday}-${month}-${year} ${hours}:${mins}`;
//- DD/MM/YYYY HH:mm
const dateFormat3 = `${dateToday}/${month}/${year} ${hours}:${mins}`;

//output
console.log(`YYYY-MM-DD HH:mm ${dateFormat1}
DD-MM-YYYY HH:mm ${dateFormat2}
DD/MM/YYYY HH:mm ${dateFormat3}`)