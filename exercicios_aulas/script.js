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


// Exercicio 

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



// Loop 

for(let k = 0; k < 5; k++)
{
    console.log(k);
}

for(let k = 0; k < 100; k = k + 2)
{
    console.log(k);
}


for(let k = 5; k > 0; k--)
{
    console.log(k);
}


let contador = 20

for(let k = 0; k < 5; k++)
{
    console.log(contador + k);
}



console.log("=======================")



// Exercicio loop 

for(let i = 0; i <= 10; i++) {
     if (i % 2 === 0) {
    console.log(i);
     }
}

/*for(let i = 0; i <= 10; i = i + 2) { 
   console.log(i);
}
*/


let j = 0;
while (j <= 10) {
    if (j % 2 === 0) {
         console.log(j);      
    }   
    j++ 
}


let p = 0; 
    do {
        if (p % 2 === 0) {
         console.log(p);   
        }
    p++;
    } while(p <= 10)


// funções

function nomeAluna() {
    console.log("sofia")
}

nomeAluna();



// exercicio 

function soma(numero) {
    return numero + 2; 
}

function soma(numero1, numero2) {
    return numero1 + numero2; 
}

function duplicarNumero(numero) {
    return numero * 2;
}

function duplicarNumero(numero1, numero2) {
    return numero1 * numero2;
}



function gerarPessoa(nomePessoa, idadePessoa) {
   return {
    nome: nomePessoa,
    idade: idadePessoa,
   };
}



//arrays



//exercicio 


const meses = new Array(4);
meses[0]= "janeiro";
meses[1]= "fevereiro";
meses[2]= "março";
meses[3]= "abril";


for (let s = 0; s < meses.length; s++) {
    console.log(meses[s]);
}

meses.push("Junho");
console.log(meses);

meses.unshift("jdfjbsj");
console.log(meses);

const colors = ["red", 20, "green", 30, "yellow", 40, "blue"];




// exercicio arrays

const frutas = ["banana", "pera"];
console.log(frutas.length);



const adicionarFruta = frutas.push("cerejas");
console.log(adicionarFruta);



const stringSimples = frutas.toString();
console.log(stringSimples);


const tresMeses = ["janeiro", "fevereiro", "marco"];
const tresMesesString = tresMeses.toString();


const numeros = [1, 2, 3];
console.log(numeros);

const removerUltimo = numeros.pop();
console.log(removerUltimo);

const removerPrimeiro = numeros.shift();
console.log(removerPrimeiro);


const arrayNovo = ["cão", "gato"];

const separador = arrayNovo.join("/");
console.log(separador);


const cenas = [ "computador", "caneta"];
const maisCenas = ["copo", "papel"]

const juntar = cenas.concat(maisCenas);
console.log(juntar);



const dadosPessoais = {
    nome: "Sofia",
    idade: 30,
    naturalidade: "Viseu",
}

console.log(dadosPessoais);

console.log("keys", Object.keys(dadosPessoais));
console.log("values", Object.values(dadosPessoais));
console.log("entries", Object.entries(dadosPessoais));


// exercicio strings 

let texto = "inacreditavelmente mau";
console.log(texto.length);

let posicao = "inacreditavelmente mau";
console.log(posicao.indexOf('mau'));


let texto2 = "inacreditavelmente mau";
console.log(texto2.replace('inacreditavelmente', 'Java Script é espetacular'));



const maiusculas = "um texto qualquer";
console.log(maiusculas.toUpperCase());

const minusculas = "um texto qualquer";
console.log(minusculas.toLowerCase());


let cortar = "Java Script é espetacular mau";
console.log(cortar.split('espetacular'));



const frase = "Isto é um curso de Dev"

const fraseAlterada = frase.replace("isto", "JavaScript é espectaccular");
console.log(fraseAlterada);


// exercicio concatenação

const frase1 = "isto é um teste ";  
const frase2 = "tu vais passar";
console.log(frase1.concat(frase2));

const frase3 = "Isto é 1 string "; 
const frase4 = "com 2 numeros";
console.log(frase3 + frase4);

// const frase5 = 'isto é' + 1 + 'string com' + 4 + 'numeros';
// console.log(frase5);
// ?????



// exercicio date 

const date = new Date("2020-02-06");
console.log(date);

const diaDaSemana = date.getDay();
console.log(diaDaSemana);

const dataAlterada = new Date("2020-02-06");
dataAlterada.setDate('06');
dataAlterada.setMonth(2); 
dataAlterada.setFullYear(2021); 
console.log(dataAlterada);

