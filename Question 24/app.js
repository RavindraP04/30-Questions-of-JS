// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.includes("Meat") == false ) {
    shoppingCart.unshift("Meat");
}

//add Sugar at the end of you shopping cart if it has not been already added

if (shoppingCart.includes("Sugar") == false ) {
    shoppingCart.push("Sugar");
}

//remove 'Honey' if you are allergic to honey
let allergic = true;
if ( allergic ) {
    const position = shoppingCart.indexOf("Honey");
    shoppingCart.splice(position, 1);
}

//modify Tea to 'Green Tea'
const position = shoppingCart.indexOf("Tea");
shoppingCart.splice(position, 1, "Green Tea");

console.log(shoppingCart)
