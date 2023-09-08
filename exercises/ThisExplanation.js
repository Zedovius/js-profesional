//Establece 'this' usando 'call()'
function saludar() {
    console.log(`Hola. Soy ${this.name} ${this.apellido} `);
};

const richard = {
    name: "Richard",
    apellido: "López",
};

saludar.call(richard);

//Establece 'this' usando 'call()' y pasar argumentos a la función.
function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);    
}

caminar.call(richard, 400, "norte");

//Establece 'this' usando 'apply()' y pasar argumentos a la función.
const valores = [800, "noreste"];
caminar.apply(richard, valores);

//Establece 'this' en una nueva función usando 'bind()'.
const daniel = {
    name: "Daniel",
    apellido: "Sánchez",
};

const danielSaluda =  saludar.bind(daniel); 
danielSaluda();
//pasarle argumentos a una función con 'this'
// const danielCamina = caminar.bind(daniel);
// danielCamina(1000, 'este');

//Pero hay otra forma de añadir argumentos: los añadimos después del 'this'
const danielCamina = caminar.bind(daniel, 2000, 'sur');
danielCamina();
