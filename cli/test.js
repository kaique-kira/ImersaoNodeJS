const { deepEqual, ok } = require('assert');
const database = require('./database');
const { REFUSED } = require('dns');

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1,
};
const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Batman',
    poder: 'Dinheiro',
    id: 2,
};

describe('Suite de manipulacão de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
    });
    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [resultado] = await database.listar(expected.id);
        ok(resultado, expected);
    });
    it('Deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual([actual], expected);
    });
    it('Deve remover o heroi por id', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual(resultado, expected);
    });
    it('Deve atualizar um heroi pelo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Robin',
            poder: 'piruleta',
        };
        const novoDado = {
            nome: 'Robin',
            poder: 'piruleta',
        };
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
        deepEqual([resultado], expected);
    });
});
