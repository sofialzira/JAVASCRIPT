// const profissao = {
//   empresa: "design",
//   anos: 4,
// };

// const aluna = {
//   name: "Sofia",
//   idade: 30,
//   experiencia: profissao,
// };

//  console.log(profissao)
// // console.log(aluna)

// let subtotal = 10 * 2;
// subtotal++;

// let valor = 3 > 2;
// console.log(valor);

// let test = 3;
// ++test;
// console.log(test);

// const exemplo = "gato" && "cao";
// console.log(exemplo);

// const exemplo2 = "gato" || "cao";
// console.log(exemplo2);

// let qualquerCoisa = 20;
// let vinte = "20"
// let ar = "arroz"

// console.log(qualquerCoisa > 20 && ar)
// console.log(qualquerCoisa === 20 || ar)

// const subTotal = 40;
// let total = 0;

// if (subTotal >= 100) {
//     total = subTotal / 1.2;
//   } else if (subTotal >= 50) {
//     total = subTotal / 1.1;
//   } else {
//     total = subTotal;
//   }

// console.log(total)

// const compras = "padaria";

// switch (compras) {
//   case "lacticinios":
//     total = subTotal / 1.2;
//     break;
//   case "bebidas":
//     total = subTotal / 1.1;
//     break;
//   case "padaria":
//     total = subTotal / 1.3;
//     break;
//   default:
//     total = subTotal * 2;
//     break;
// }

// // Exercicio

// let val = 6;

// if (val === 1) {
//     console.log("eu sou o unico")
// } else if (val === 2) {
//     console.log("Somos pares")
// } else if (val === 3) {
//     console.log("Somos um trio")
// }

// console.log("=======================")
// console.log()

// switch (val) {
//     case 1:
//     console.log("eu sou o unico")
//     break;
//     case 2:
//     console.log("Somos pares")
//     break;
//     case 3:
//     console.log("Somos um trio")
//     break;
//     default:
//     console.log("ta top")
// }

// // Loop

// for(let k = 0; k < 5; k++)
// {
//     console.log(k);
// }

// for(let k = 0; k < 100; k = k + 2)
// {
//     console.log(k);
// }

// for(let k = 5; k > 0; k--)
// {
//     console.log(k);
// }

// let contador = 20

// for(let k = 0; k < 5; k++)
// {
//     console.log(contador + k);
// }

// console.log("=======================")

// // Exercicio loop numero par

// for(let i = 0; i <= 10; i++) {
//      if (i % 2 === 0) {
//     console.log(i);
//      }
// }

// /*for(let i = 0; i <= 10; i = i + 2) {
//    console.log(i);
// }
// */

// let j = 0;
// while (j <= 10) {
//     if (j % 2 === 0) {
//          console.log(j);
//     }
//     j++
// }

// let p = 0;
//     do {
//         if (p % 2 === 0) {
//          console.log(p);
//         }
//     p++;
//     } while(p <= 10)

// // funções

// function nomeAluna() {
//     console.log("sofia")
// }

// nomeAluna();

// // exercicio

// function soma(numero) {
//     return numero + 2;
// }

// function soma(numero1, numero2) {
//     return numero1 + numero2;
// }

// function duplicarNumero(numero) {
//     return numero * 2;
// }

// function duplicarNumero(numero1, numero2) {
//     return numero1 * numero2;
// }

// function gerarPessoa(nomePessoa, idadePessoa) {
//    return {
//     nome: nomePessoa,
//     idade: idadePessoa,
//    };
// }

// //arrays

// //exercicio

// const meses = new Array(4);
// meses[0]= "janeiro";
// meses[1]= "fevereiro";
// meses[2]= "março";
// meses[3]= "abril";

// for (let s = 0; s < meses.length; s++) {
//     console.log(meses[s]);
// }

// meses.push("Junho");
// console.log(meses);

// meses.unshift("jdfjbsj");
// console.log(meses);

// const colors = ["red", 20, "green", 30, "yellow", 40, "blue"];

// // exercicio arrays

// const frutas = ["banana", "pera"];
// console.log(frutas.length);

// const adicionarFruta = frutas.push("cerejas");
// console.log(adicionarFruta);

// const stringSimples = frutas.toString();
// console.log(stringSimples);

// const tresMeses = ["janeiro", "fevereiro", "marco"];
// const tresMesesString = tresMeses.toString();

// const numeros = [1, 2, 3];
// console.log(numeros);

// const removerUltimo = numeros.pop();
// console.log(removerUltimo);

// const removerPrimeiro = numeros.shift();
// console.log(removerPrimeiro);

// const arrayNovo = ["cão", "gato"];

// const separador = arrayNovo.join("/");
// console.log(separador);

// const cenas = [ "computador", "caneta"];
// const maisCenas = ["copo", "papel"]

// const juntar = cenas.concat(maisCenas);
// console.log(juntar);

// const dadosPessoais = {
//     nome: "Sofia",
//     idade: 30,
//     naturalidade: "Viseu",
// }

// console.log(dadosPessoais);

// console.log("keys", Object.keys(dadosPessoais));
// console.log("values", Object.values(dadosPessoais));
// console.log("entries", Object.entries(dadosPessoais));

// // exercicio strings

// let texto = "inacreditavelmente mau";
// console.log(texto.length);

// let posicao = "inacreditavelmente mau";
// console.log(posicao.indexOf('mau'));

// let texto2 = "inacreditavelmente mau";
// console.log(texto2.replace('inacreditavelmente', 'Java Script é espetacular'));

// const maiusculas = "um texto qualquer";
// console.log(maiusculas.toUpperCase());

// const minusculas = "um texto qualquer";
// console.log(minusculas.toLowerCase());

// let cortar = "Java Script é espetacular mau";
// console.log(cortar.split('espetacular'));

// const frase = "Isto é um curso de Dev"

// const fraseAlterada = frase.replace("isto", "JavaScript é espectaccular");
// console.log(fraseAlterada);

// // exercicio concatenação

// const frase1 = "isto é um teste ";
// const frase2 = "tu vais passar";
// console.log(frase1.concat(frase2));

// const frase3 = "Isto é 1 string ";
// const frase4 = "com 2 numeros";
// console.log(frase3 + frase4);

// // const frase5 = 'isto é' + 1 + 'string com' + 4 + 'numeros';
// // console.log(frase5);

// // exercicio date

// const date = new Date("2020-02-06");
// console.log(date);

// const diaDaSemana = date.getDay();
// console.log(diaDaSemana);

// const dataAlterada = new Date("2020-02-06");
// dataAlterada.setDate('06');
// dataAlterada.setMonth(2);
// dataAlterada.setFullYear(2021);
// console.log(dataAlterada);

// // exercicio função anonima

// const funcaoAnonima = function () {
//     console.log("Sofia Oliveira");
// }

// funcaoAnonima();

// const somar = function (numero1, numero2) {
//     console.log(8 + 2);
// }

// somar();

// // IIFE

// // (function (a, b) {
// //     console.log("hello");
// // })(a, b);

// // exercicio IIFE

// (function () {
//     console.log("SOFIA OLIVEIRA")
// })();

// console.log(
//     (function () {
//       return "SOFIA";
//     })()
//   );

// (function (a, b) {
//     console.log(a + b);
// })(2, 3);

// console.log(
//     (function (a, b) {
//       return a + b;
//     })(3, 3)
//   );

// // closure

// function teste() {
//     return function () {
//         return "hello!!!!!!!!!!!!!!!!";
//     };
//   }

// console.log(teste());

// function calcularIVA(iva) {
//     return function (produto) {
//         return iva * produto;
//     };
// }

// const calcularIVA6 = calcularIVA(6);
// const calcularIVA13 = calcularIVA(13);
// const calcularIVA23 = calcularIVA(23);

// console.log(calcularIVA13(100));

// calcularIVA(22)(200);
// calcularIVA(22)(200);
// calcularIVA(22)(1000);

// // exercicio closure

// function dividir(valor) {
//     return function() {
//         return valor / 2;
//     }
// };
// console.log(dividir(10));

// dividir(10)();

// function divisao(valor1) {
//     return function (valor2) {
//         return valor1 / valor2;
//     }
// };

// const funcao = divisao(5);

// console.log(divisao(5));
// console.log(funcao(20));
// console.log(divisao(10)(2));

// // resolução

// function dividir2(numero) {
//     return function () {
//       return numero / 2;
//     };
//   }

//   dividir2(10)();
//   const divisao2 = dividir2(20);
//   divisao2();

//   function divisao(primeiro) {
//     return function (segundo) {
//       return primeiro / segundo;
//     };
//   }

//   divisao(10)(5);

//   const divisao30 = divisao(30);
//   divisao30(10);
//   divisao30(5);

//   // exercicio funçoes construtoras

//   function Livro(titulo, autor) {
//     this.titulo = titulo;
//     this.autor = autor;
//   }

//   const livro1 = new Livro("Os três mosqueteiros.", "Alexandre Dumas");
//   const livro2 = new Livro("Os Maias.", "Eça de Queiroz");

//   console.log(livro1.titulo);
//   console.log(livro1.autor);
//   console.log(livro2.titulo);
//   console.log(livro2.autor);

//   livro1.titulo = "O Conde de Monte Cristo.";

//   console.log(livro1);

// //

// const nome = "sofia";

// const titulo = `${nome} apelido`;

// // operador condicional ternário

// const somaTernario = 10;
// const totalTernario = somaTernario > 10 ? "caro" : "barato";

// // .map (retorna algo, neste caso as palavras em maiuscula, para criar algo novo)

// const palavras = ["primeira", "segunda", "a", "tres"];

// const palavrasMaiusculas = palavras.map((palavra) => palavra.toUpperCase());

// const palavrasMaiusculas2 = [];
// for(let s = 0; s < palavras.length; s++){
//   palavrasMaiusculas2.push(palavras[s].toUpperCase());
// }

// // .forEach (corre posição a posição, nao retorna)

// palavras.forEach((palavra) => console.log(palavra));

// // .filter

// const palavrasMaiusculas3 = palavras.filter((palavra) => palavra.length > 3 && palavra.length < 8);

// // .reduce

// const resultadoFinal = palavras.reduce((resultado, palavra) => `${resultado} ${palavra}`, "Começa assim:");

// const carrinhoCompras = [
//   {
//     nome: "A",
//     preco: 10.9,
//   },
//   {
//     nome: "B",
//     preco: 9.9,
//   },
//   {
//     nome: "C",
//     preco: 19.8,
//   },
//   {
//     nome: "D",
//     preco: 209.9,
//   },
// ];

// let totalCarrinhoCompras = 0;
// carrinhoCompras.forEach((produto) => (total += produto.preco));

// const totalCarrinhoCompras2 = carrinhoCompras.reduce(
//   (total, produto) => (total += produto.preco),
//   0
// );

// // destructuring - extrair dados de arrays

// const [a, b, c, d] = palavras;

// // const [primeiroProduto] = carrinhoCompras;
// // const [, segundoProduto] = carrinhoCompras;
// const [primeiroProduto, ...produtos] = carrinhoCompras;

// const conjuntoArrays = [...carrinhoCompras, ...palavras];

// // destructuring - extrair dados de objectos

// const aluno = {
//   nome: "antonio",
//   idade: 10,
//   escolaridade: 5,
// };

// const { nome: nomeAluno, idade: idadeAluno } = aluno;

// // exercicio ES6

// var estudantes = [
//   { id: 1, nome: 'João', idade: 20 },
//   { id: 2, nome: 'Maria', idade: 22 },
//   { id: 3, nome: 'Pedro', idade: 18 },
//   { id: 4, nome: 'Ana', idade: 21 }
// ];

// const encontrarAlunoId = (id) => estudantes.find(estudante => estudante.id === id);
//   console.log(encontrarAlunoId(3));

// const estudantesNomes = () =>
//  estudantes.map((estudante) => `Nome do estudante: ${estudante.nome}`);
//   console.log(estudantesNomes());

// const estudantesMaiorIdade = (idade =>
//   estudantes.filter(estudante => estudante.idade > idade));
//   console.log(estudantesMaiorIdade(19));

// promises

// const promise = new Promise ((resolve, reject) => {

// try {
//   resolve("tudo certo");
// }
// catch (e) {
//   reject("erro", e);
// }

// });

// exercicio promises

// const novaSoma = (numero1, numero2) => {
//   return numero1 + numero2;
// }

const novaSoma = (numero1, numero2) => {
  const somar = numero1 + numero2;

  const promise = new Promise((resolve, reject) => {
    if (somar % 2 === 0) {
      resolve("é par");
    } else {
      reject("é impar");
    }
  });
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

console.log(novaSoma(2, 7));

// async/await

const user = new Promise((resolve, reject) =>
  setTimeout(() => resolve({ name: "Sofia" }, 5000))
);

const loadUser = async () => {
  console.log("iniciar");
  const userLogged = await user;
  console.log(userLogged);
};

// exercicio promise 2

const soma = (primeiroValor, segundoValor) => {
  const total = primeiroValor + segundoValor;

  const promise = new Promise((resolve, reject) => {
    if (total % 2 === 0) {
      resolve("numero par");
    } else {
      reject("numero impar");
    }
  });

  return promise;
};

const asyncSoma = async (primeiro, segundo) => {
  try {
    const result = await soma(primeiro, segundo);
    console.log(result);
    return result;
  } catch (error) {
    return error;
    console.log(error);
  }
};
console.log(asyncSoma(1, 2));



// exercicio nome promise 

// const name = (nome) => {
//   return new Promise((resolve, reject) => {
//     if (nome === "javascript") {
//       resolve(nome);
//     } else {
//       reject("não é um nome");
//     }
//   });
// };

// const nomeFinal = async (nome) => {
//   try {
//     const resultado = await name(nome);
//     console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// };


// console.log(nomeFinal("javascript"));

/* const name = (nome) => {
  const finalName = new Promise((resolve, reject) => {
    if (nome === "javascript") {
      reject ("não é um nome");
    } else {
      resolve(nome);
    }
  });
  finalName
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}; */


// resolução

const getNome = (nome) => {
  const promiseNomes = new Promise((resolve, reject) => {
    if (nome === "javascript") {
      reject("Javascript é top");
    } else {
      resolve(`Nome: ${nome}`);
    }
  });

  return promiseNomes;
};

const asyncNome = async (nome) => {
 try {
  const result = await getNome(nome);
  console.log(result);
 } catch (error) {
  console.log(error);
 }
};

asyncNome("Vitor");
asyncNome("javascript");

