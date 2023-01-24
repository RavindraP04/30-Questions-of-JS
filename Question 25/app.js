// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//  If it does not exist add to the countries list.

let country = ["Combodia", "Hong Kong", "Malaysia", "Maldives", "Mogolia", "India", "Thailand"];

if (country.includes("Ethiopia")) {
    const element = country.indexOf("Ethiopia")
    console.log(country[element].toUpperCase);
}
else {
    country.push("Ethiopia");
}


console.log(country);