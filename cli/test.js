const { deepEqual, ok } = require('assert');
const Database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1,
};

describe('Suite de manipulacão de Herois', () => {
    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [resultado] = await Database.listar(expected.id);
        ok(resultado, expected);
    });
});
