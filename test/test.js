import { expect } from 'chai';
import add  from "../src/add.js";

describe('Your Test Suite Name', function () {

  it('should do something', function () {
    // Use expect for assertions
    expect(1 + 1).to.equal(2);
  });

  it('should do another thing', function () {
    // You can use various chaining methods for assertions
    expect(2 * 2).to.not.equal(5);
  });

  it('add test', function() {
    expect(add(2,2)).to.eql(4);
  })

});
