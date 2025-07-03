//primero creamos una clase
export class Car {
    brand : string;
    doors:number;
    fueltank:number;
    isRunning:boolean;
    type:string;
    createAd:number;
//Luego creamos un constructor para inicializar los atributos
    constructor(brand:string, type:string){
        this.brand=brand;
        this.doors=0;
        this.fueltank=0;
        this.isRunning=false;
        this.type=type;
        this.createAd=123456;

    }

    //Ahora creamos el metodo para que pueda cobrar vida o funcionar
    turnOn(){
        if(this.isRunning){
            console.log('El ya esta carro esta encendido');
            return;
        }
        if(this.fueltank<=0){
            console.log('El carro no tiene combustible');
            return;
        }

        this.isRunning=true;
        console.log('El carro acaba de encenderse');
    }

    fillTank(gas:number){
        if(gas <=0){
            console.log('El gas tiene que ser positivo');
        }
        let newFullTank = this.fueltank + gas;
        if(newFullTank>=100){
            newFullTank=100;
        }
        this.fueltank = newFullTank;
    }

}
//INSTANCIAR LA CLASE ()
let myMazda = new Car('mazda','Sedan');

console.log(myMazda);

myMazda.fillTank(60);
myMazda.fillTank(70);
console.log(myMazda);
myMazda.turnOn();