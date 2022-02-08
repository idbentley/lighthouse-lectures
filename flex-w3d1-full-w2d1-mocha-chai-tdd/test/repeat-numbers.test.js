const { repeatNumbers, repeatOne } = require('../repeat-numbers');

const chai = require("chai");
const expect = chai.expect;

describe('tests for the repeatNumbers function', () => {

  it('should return a string', () => {
    expect(repeatNumbers([[1,1]])).to.be.a("string");
  });
  it('should gracefully reject non-valid inputs', () => {
    expect(repeatNumbers("foo")).to.be.a("undefined");
    expect(repeatNumbers(1)).to.be.a("undefined");
    expect(repeatNumbers({})).to.be.a("undefined");
    expect(repeatNumbers([])).to.be.a("undefined");
  });

  it('should print 111 for an input of [[1, 3]]', () => {
    expect(repeatNumbers([[1,3]])).to.equal("111");
  })
  it('should print 111, 222 for an input of [[1, 3], [2, 3]]', () => {
    expect(repeatNumbers([[1,3], [2,3]])).to.equal('111, 222');
  });

  it('should handle multi-digit inputs', () => {
    expect(repeatNumbers([[10, 3]])).to.equal('101010');
  });

});

describe('tests for repeatOne function', () => {
    it('should print 111 for an input of (1, 3)', () => {
        expect(repeatOne(1,3)).to.equal("111");
      })
    
      it('should handle multi-digit inputs', () => {
        expect(repeatOne(10, 3)).to.equal('101010');
      });
});
