const {expect} = require('chai');
const sum = require('./sumOfNumbers/sum-of-numbers');

describe('Units tests for sum function',() =>{

    it('tests the output', () =>{
      expect(sum([1,2,4])).to.be.equal(7);
      expect(sum([1.1,2.2,4.4])).to.be.closeTo(7.7,0.01);
      expect(sum([1,'abc',2.2])).to.be.NaN;   
    })



});