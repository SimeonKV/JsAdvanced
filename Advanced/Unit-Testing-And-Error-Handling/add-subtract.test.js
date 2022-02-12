const expect = require('chai').expect;
let createCalculator = require('./addSubtract/add-subtract');

describe('testing the create calc func', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });


    it('testing for object properties', () => {
        expect(instance.hasOwnProperty('add')).to.be.true,
            expect(instance.hasOwnProperty('subtract')).to.be.true,
            expect(instance.hasOwnProperty('get')).to.be.true
    });


    describe('testing the add func', () => {
        it('adding number', () => {
            instance.add(33);
            instance.add(43);
            expect(instance.get()).to.equal(76);

        });

        it('adding number as string', () => {
            instance.add('10');

            expect(instance.get()).to.equal(10);
        });

        it('adding not a number', () => {
            instance.add('abc');
            expect(instance.get()).to.be.NaN;
        });

    });

    describe('testing subtract func', () => {

        it('subtracting numbers', () => {
            instance.subtract(10);
            instance.subtract(10);
            instance.subtract('10');

            expect(instance.get()).to.be.equal(-30);
        });

        it('subtracting not a number', () =>{
            instance.subtract('abc');
            expect(instance.get()).to.be.NaN;
        })


    });


});