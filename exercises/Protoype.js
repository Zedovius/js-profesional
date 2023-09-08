// function Hero(name){
//     const hero = {
//         name, 
//     }

//     hero.saludar = function() {
//         console.log(`Hola soy ${this.name}`);
//     }

//     return hero;    
// };

// const zelda = Hero("Zelda");
// zelda.saludar();

// const link = Hero("Link");
// link.saludar();

//Una mejor forma de hacer lo anterior:

//const nuevoObjeto = Object.create(objeto);

// const heroMethods = {
//     saludar: function() {
//         console.log(`Soy súperheroe ${this.name}.`);  
//     },
// };
//👆 lo mejor sería poner los métodos dentro del objeto. Lo mejor es guardar las funciones en el prototype.

function Hero(name){
    // this = const hero = Object.create(Hero.prototype); //Esto mismo lo hace 'new' de forma automática. 
    this.name = name;  
};

Hero.prototype.saludar = function() {
             console.log(`Soy un súperheroe ${this.name}!`);  
        }

const zelda = new Hero("Zelda");
zelda.saludar();

const link = new Hero("Link");
link.saludar();