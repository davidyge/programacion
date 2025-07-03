let person = {
    nombre: 'pablo',
    edad: 20,
    hobbies:['futbol', 'natacion', 'ejercicios'],
    toString(){
        let dato = this.nombre + ' ' + this.edad + ' ' + this.hobbies[0];
        console.log(dato);
    }
}

//person.toString(); // Output: 'david'

let car = {
    llantas:4,
    doors:4,
    color:'red'
}

let smarTv = {
    pulgadas: 21,
    color:'white',
    price:1000
}

let youtubeVideo = {
    format:'mp4',
    calidad:'fullHd',
    limitTime: 10
}

console.log(car);
console.log(smarTv);
console.log(youtubeVideo);