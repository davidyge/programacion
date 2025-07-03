
//6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla:
let n=5;

for(let x=1; x<=n; x++){
    let row = "";
    for(let y=1; y<=n; y++){
        row = row + (x*y) + "\t";
    }
    console.log(row);
}