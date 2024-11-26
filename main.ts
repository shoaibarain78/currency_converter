import inquirer from "inquirer";

let c_value: {[key: string]: number} = {
    PKR: 278.36,
    USD: 0.27 ,
    UAE: 3.67
}

let ans = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Converting from",
    choices: ['PKR', 'USD', 'UAE']
},
{
    type: "list",
    name: "to",
    message: "Converting to",
    choices: ['PKR', 'USD', 'UAE']
},
{
    type: "number",
    name: "amount",
    message: "Your amount to convert"
}
])

console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
