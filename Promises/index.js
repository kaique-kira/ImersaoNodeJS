const util = require("util");
const obterEndercoAsync = util.promisify(obterEnderco);

function obterUsuario() {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Alladin",
                dataNascimento: new Date(),
            });
        }, 1000);
    });
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: "4667-4983",
                ddd: "11",
            });
        }, 2000);
    });
}

function obterEnderco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "Hermes da fonse",
            numero: "25",
        });
    }, 2000);
}

main();
async function main() {
    try {
        console.time("medida-promise");
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEndercoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndercoAsync(usuario.id),
        ]);

        const endereco = resultado[1];
        const telefone = resultado[0];

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd})-${telefone.telefone},
            Endereço: ${endereco.rua} Nº ${endereco.numero}
        `);

        console.timeEnd("medida-promise");
    } catch (error) {
        console.error("Deu ruim", error);
    }
}

// const usuarioPromise = obterUsuario();
// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result) {
//             return {
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: {
//                     ddd: result.ddd,
//                     telefone: result.telefone
//                 }
//             }
//         })
//     })
//     .then( function (resultado) {
//         const endereco = obterEndercoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result) {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: {
//                     rua: result.rua,
//                     numero: result.numero
//                 }
//             }
//         })
//     })
//     .then(function (resultado) {
//         console.log(`
//         Nome: ${resultado.usuario.nome}
//         Endereço: ${resultado.endereco.rua}, Nº${resultado.endereco.numero}
//         Telefone ${resultado.telefone.ddd}-${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function (error) {
//         console.error('Deu ruim', error)
//     })

// obterUsuario(function resolverUsuario(error, usuario) {
//     if(error) {
//         console.error("Deu ruim em Usuario", error)
//         return;
//     }
//     obterTelefone(usuario.id,  function resolverTelefone(error1, telefone) {
//         if(error1) {
//             console.error("Deu ruim em telefone", error1)
//             return;
//         }
//         obterrEnderco(usuario.id, function resolverEndereco(error2, endereco) {
//             if(error2) {
//                 console.error("Deu ruim em endereço", error2)
//                 return;
//             }
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereço: ${endereco.rua}, nº ${endereco.numero},
//             Telefone: ${telefone.ddd}.${telefone.telefone}
//             `);
//     })

//     })
// })

// // const usuario = obterUsuario();
// // const telefone = obterUsuario(usuario.id)

// //  console.log('telefone', telefone)
