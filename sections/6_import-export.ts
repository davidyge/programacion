import { addNumbers, substractNumbers, timesNumbers, divideNumbers } from "../helpers/math-helpers";

let num1 = 10;
let num2 = 20;

let total1:number = addNumbers(num1,num2);
let total2:number = substractNumbers(num1,num2);
let total3:number = timesNumbers(num1,num2);
let total4:number = divideNumbers(num1,num2);


console.log('add: ',total1);
console.log('substract: ',total2);
console.log('times: ',total3);
console.log('divide: ',total4);