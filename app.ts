function heroesThatStartsWith(heroes: string[], letter: string): string[] {
    let filteredHeroes: string[] = []; // Creamos un nuevo arreglo vacío

    for (let hero of heroes) { 
        if (hero.startsWith(letter)) { 
            filteredHeroes.push(hero); // Agregamos los que inician con la letra
        }
    }

    return filteredHeroes; // Retornamos el nuevo arreglo filtrado
}

// Ejemplo de uso
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith(heroes, 'S');
console.log(herosWithLetterS); // ['She Hulk', 'Spiderman']
