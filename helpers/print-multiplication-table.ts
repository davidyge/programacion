export function multiplicationTale (num1:number, num2:number=10){
    //return num1 + num2;
    let result: string = ''; 
    for (let i=1; i<=num2; i++){
        //result =  num1 + 'x' + i + '=' + num1*i;
        //result += `${num1} x ${i} = ${num1 * i}\n`;
        result += num1 + " x " + i + " = " + (num1 * i) + "\n";
    }
    return result;
}