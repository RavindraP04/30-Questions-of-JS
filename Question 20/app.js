
// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

let userInput = prompt("Enter the name of a month:- ");
userInput = userInput.toLowerCase();

switch (userInput) {
    case "december":
    case "january":
    case "february":
        console.log("It is a Winter Season");
        break;

    case "september":
    case "october":
    case "november":
        console.log("It is an Autumn Season");
        break;

    case "march":
    case "april":
    case "may":
        console.log("It is a Spring Season");
        break;

    case "june":
    case "july":
    case "august":
        console.log("It is a Summer Season");
        break;

    default:
    console.log("Invalid Input");
    break;
}
