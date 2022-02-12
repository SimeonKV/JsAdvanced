const expect = require('chai').expect;
const rgbToHexColor = require('./rgbToHex/rgb-to-hex');


describe('test the rgbToHexFunction', () => {

    describe('returns undefind with worng input', () =>{

    it('return false with wrong input data type', () => {
            expect(rgbToHexColor('1', 2, 3)).to.be.undefined,
            expect(rgbToHexColor(1, 'abc', 2)).to.be.undefined,
            expect(rgbToHexColor(1, 2, 'a')).to.be.undefined,
            expect(rgbToHexColor('1', '2', '3')).to.be.undefined
    });

    it('returns undefined with values less than zero or bigger than 255',() =>{
        expect(rgbToHexColor(1,-1,204)).to.be.undefined;
        expect(rgbToHexColor(1,1,256)).to.be.undefined;
        expect(rgbToHexColor(-1,0,255)).to.be.undefined;
    });

    it('it returns undefined with less than three params', () =>{
          expect(rgbToHexColor(1,1)).to.be.undefined;
    });

});

it('returns correct color', () =>{
     expect(rgbToHexColor(1,2,3)).to.be.equal('#010203');
     expect(rgbToHexColor(233,126,205)).to.be.equal('#E97ECD');
});

});