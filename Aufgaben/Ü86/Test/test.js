const { expect } = require('chai');

const { toCelcius } = require('../app');
const { toFahrenheit } = require('../app');

describe ('testing toCelcius', () => {

    it('test toCelcius', () => {
        expect(toCelcius(32)).to.equal(0);
        expect(toCelcius(212)).to.equal(100);
        expect(toCelcius(-40)).to.equal(-40);
    });

});

describe ('testing toFahrenheit', () => {

    it('test toFahrenheit', () => {
        expect(toFahrenheit(0)).to.equal(32);
        expect(toFahrenheit(100)).to.equal(212);
        expect(toFahrenheit(-40)).to.equal(-40);
    });
});