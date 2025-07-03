// 4- Dado el siguiente arreglo:
// let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

import { copyFileSync } from "fs";

let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; //0 a 9

let numberx= numbers[0];
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>numberx){
        //si encontramos uno mayor lo actualizamos
        numberx = numbers[i];
    }
}
console.log('el numero mayor es: ', numberx)