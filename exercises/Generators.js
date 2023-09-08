//esta es la sintaxis de un generador

function* simpleGenerator() {
    console.log("GENERATOR START");
    yield 1;
    yield 2;
    yield 3;
    console.log("GENERATOR END");
};

// const gen = simpleGenerator();

//Ahora un ejemplo de un  generador que nos cree la secuencia de fibonacci lazy.

function* fibonacci() {
    let a = 1;
    let b = 1;
    while (true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
};

const gen = fibonacci();

console.log("Primera secuencia", gen.next());
console.log("Segunda secuencia", gen.next());
console.log("Tercera secuencia", gen.next());
console.log("Cuarta secuencia", gen.next());