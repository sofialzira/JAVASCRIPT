const profissao = {
  empresa: "design",
  anos: 4,
};

const aluna = {
  name: "Sofia",
  idade: 30,
  experiencia: profissao,
};

 console.log(profissao)
// console.log(aluna)

let subtotal = 10 * 2;
subtotal++;

let valor = 3 > 2;
console.log(valor);

let test = 3;
++test;
console.log(test);



const exemplo = "gato" && "cao";
console.log(exemplo);

const exemplo2 = "gato" || "cao";
console.log(exemplo2);


let qualquerCoisa = 20;
let vinte = "20"
let ar = "arroz"

console.log(qualquerCoisa > 20 && ar)
console.log(qualquerCoisa === 20 || ar)




const subTotal = 40;
let total = 0;

if (subTotal >= 100) {
    total = subTotal / 1.2;
  } else if (subTotal >= 50) {
    total = subTotal / 1.1;
  } else {
    total = subTotal;
  }

console.log(total)

const compras = "padaria";

switch (compras) {
  case "lacticinios":
    total = subTotal / 1.2;
    break;
  case "bebidas":
    total = subTotal / 1.1;
    break;
  case "padaria":
    total = subTotal / 1.3;
    break;
  default:
    total = subTotal * 2;
    break;
}


/** Exercicio */

let val = 6;

if (val === 1) {
    console.log("eu sou o unico")
} else if (val === 2) {
    console.log("Somos pares")
} else if (val === 3) {
    console.log("Somos um trio")
}

console.log("=======================")
console.log()

switch (val) {
    case 1:
    console.log("eu sou o unico")
    break;
    case 2:
    console.log("Somos pares")  
    break;
    case 3:
    console.log("Somos um trio")
    break;
    default: 
    console.log("ta top")
} 
