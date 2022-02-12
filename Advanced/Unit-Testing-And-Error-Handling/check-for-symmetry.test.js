const {expect} = require('chai');
const isSymmetric = require('./checkForSymmetry/check-for-symmetry');

describe('unit tests for isSymmertric func', () =>{

it('returns false with a differen input value from array', () =>{
    expect(isSymmetric('123')).to.be.false;
});

it('returns false if not symmetric',() =>{
expect(isSymmetric([1,2,3,4])).to.be.false;
});

it('returns true if is symmetrix',() =>{
expect(isSymmetric([1,2,2,1])).to.be.true;
});

it('returns ture with an empty array',() => {
expect(isSymmetric([])).to.be.true;
});


it('returns false with same values but different data type',() => {
expect(isSymmetric([1,2,2,'1'])).to.be.false
});
});

