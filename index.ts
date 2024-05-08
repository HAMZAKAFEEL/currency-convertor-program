import inquirer from "inquirer";

//define the list of currencies and their exchange rates
let exchange_rate: any ={
    "USD": 1, //BASE CURRENCY
    "EUR": 0.9, //EUROPIAN CURRENCY
    "JYP": 113, //JAPANESE CURRENCY
    "CAD": 1.3, //CANADIAN DOLLAR
    "AUD": 1.65, //AUSTRALIAN DOLLAR
    "PKR": 277.70, //PAKISTANI RUPEES
}

//prompt the user to select currencies to convertfrom and to
let user_answer =await inquirer.prompt([
   {
    name: "from_currency",
    type: "list",
    message: "SELECT THE CURRENCY TO CONVERT FROM",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],

   },
   {
    name: "to_currency",
    type: "list",
    message: "SELECT THE CURRENCY TO CONVERT INTO",
    choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],

   },
   {
    name: "amount",
    type: "input",
    message: "ENTER THR AMOUNT TO CONVERT",
   } 
]);

//PERFORM CURRENCY CONVERSION BY USING FORMULA
let from_amount =exchange_rate[user_answer.from_currency];
let to_amount =exchange_rate[user_answer.to_currency];
let amount =user_answer.amount

//FORMOLA FOR CONVERSION
let base_amount = amount /from_amount
let converted_amount =  base_amount *to_amount

//DISPLAYTHE CONVERTED AMOUNT
console.log(`converted Amount =${converted_amount}`);



