import inquirer from "inquirer";
import chalk from "chalk";

let userInput = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Please enter your number: ",
    validate: (input) => {
      const num2 = parseInt(input);
      if (isNaN(num2)) {
        return "Please enter the numeric number";
      } else {
        return true;
      }
    },
  },
]);
let userIn: number = userInput.num1;

function printTable(num: number): void {
  console.log("=".repeat(20));

  console.log(chalk.yellow(`    Table of ${num}`));
}
printTable(userIn);
console.log("=".repeat(20));

for (let i: number = 1; i <= 10; i++) {
  let result: number = userIn * i;
  console.log(chalk.green(` ${userIn} x ${i} = ${result}`));
}
