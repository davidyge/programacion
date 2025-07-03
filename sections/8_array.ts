// let flowers:string[] = ['rosa','girasol','lirio'];
// for(let i=0;i<flowers.length; i++){
//     console.log(flowers[i]);
// }

let employed:string[] = ['juan','pedro','ana'];
let salaries:number[] = [ 1200, 1500, 2000 ];

for (let i=0; i<employed.length; i++){
    let employe = employed[i];
    let salary = salaries[i];
    console.log('El salario de ' + employe + ' es de ' + salary + ' soles');
}