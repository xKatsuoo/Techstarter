const { expect } = require('chai');
const { add, multiply, subtract, divide } = require( '../rechner');

describe('Teste alle Rechner Funktionen', () => {

    it('Test für Add Funktion', () => {
        // Wenn 1 + 1 gerechnet wird, dann soll das Ergebnis 2 sein
        expect(add(1, 1)).to.equal(2);
        expect(add(2, 3)).to.equal(5);
    });

});

describe('test multiply', () => {

    it('test multiply', () => {
        expect(multiply(2, 3)).to.equal(6);
        expect(multiply(2, 4)).to.equal(8);

    });
});

describe('test subtract', () => {

    it('test subtract', () => {
        expect(subtract(2, 3)).to.equal(-1);
        expect(subtract(2, 4)).to.equal(-2);

    });
});

describe('test divide', () => {

    it('test divide', () => {
        expect(divide(2, 3)).to.equal(2 / 3);
        expect(divide(2, 4)).to.equal(2 / 4);

    });
});
