const { deepEqual, ok } = require('assert');
const Database = require('./database');
const database = require('./database');
const { REFUSED } = require('dns');

const DEFAULT_ITEM_CADASTRAR = [
    {
        nome: 'Flash',
        poder: 'Speed',
        id: 1,
    },
];

describe('Suite de manipulacão de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    });
    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [resultado] = await Database.listar(expected.id);
        ok(resultado, expected);
    });
    it('Deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const resultado = await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const [actual] = await Database.listar(DEFAULT_ITEM_CADASTRAR.id);
        deepEqual([actual], expected);
    });
});
