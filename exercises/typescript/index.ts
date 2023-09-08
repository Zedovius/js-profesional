//Tipos de datos en TypeScript

//Boolean
let muted: boolean = true;
muted = false;

//Number
let numerador: number = 46;
let denominador: number = 6;
let division = numerador / denominador;

//String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let gente: string[] = ['John', 'Gabriela', 'Primitivo'];


// let genteYNumeros: Array< string | number> = [];
// genteYNumeros.push('Cebollin');
// genteYNumeros.push(600);

//Enum

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde', 
    Azul = 'Azul',
    Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Rojo; 
console.log(`Mi color favorito es ${colorFavorito}`);

//Any. A veces no sabemos que tipo de valor va a ser una variable.

let comodin: any = "Joker";
comodin = { type: 'Wildcard' };


//Object
let carro: object = { marca: 'Honda' };

//Funciones. En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función.

//Esos dos puntos después del paréntesis es para ser explícitos en el tipo de retorno que esperamos. 
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(25,76);

//Aqui los dos puntos después del paréntesis indican que el valor del retorno es una función.
// function createAdder(a: number): (number) => number {
//     return function (b: number) {
//         return b + a;
//     }
// }

function createAdder(a: number): (b: number) => number {
    return function(b): number {
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);
console.log(fourPlusSix);


//Con el signo de interrogación despues del nombre del parámetro indica que puede ser undefined || string. Podemos agregar un valor por defecto después del tipo de valor: lastName: string = "Ejote" 
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const donEjote = fullName('Don');


/*Interfaces. Se convierten en un tipo, eso quiere decir que podemos utilizar una interfaz para tipar una variable. Si no completo el contrato de la interfaz (las propiedades que declaré) va a salir un error*/



interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 7,
    color: Color.Rojo,
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return  this.color ? `Un rectángulo ${this.color}`: `Un rectángulo`;
}

console.log(rect.toString());
