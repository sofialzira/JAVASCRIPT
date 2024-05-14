paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];

console.log(paises);

for(let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}


const numeroDeItems = paises.length;
console.log(numeroDeItems);


const adicionarPais = paises.unshift("Portugal");
console.log(adicionarPais);

const adicionarPaisFim = paises.push('Espanha');
console.log(adicionarPaisFim);

for(let a = (paises.length - 3); a < paises.length; a++) {
    console.log(paises[a]);
}

const ultimosTres = paises.slice(10);
console.log(ultimosTres);

const separador = paises.join(" - ")
console.log(separador);