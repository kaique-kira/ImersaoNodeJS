const service = require("./index");

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
};

async function main() {
    try {
        const result = await service.obterPessoas("a");

        // const names = [];
        // result.results.forEach(function (item) {
        //     names.push(item.name);
        // });
        // const names = result.results.map((pessoa) => pessoa.name);

        const names = result.results.meuMap(function (pessoa, indice) {
            return `[${indice}] - ${pessoa.name}`;
        });
        console.log("nomes", names);
    } catch (error) {
        console.error("Deu ruim", error);
    }
}

main();
