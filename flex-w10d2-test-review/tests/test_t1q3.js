const chai    = require("chai");
const sinon   = require("sinon");
const assert  = chai.assert;

const lib = require("../answers/t1q3.js");

describe("mode", () => {

  it("mode([1,5,2,6,3,5]) === 5", () => {
    assert.equal(lib.mode([1,5,2,6,3,5]), 5);
  });

  it("mode([0,1,5,2,6,2,5,0,0]) === 0", () => {
    assert.equal(lib.mode([0,1,5,2,6,2,5,0,0]), 0);
  });

});
