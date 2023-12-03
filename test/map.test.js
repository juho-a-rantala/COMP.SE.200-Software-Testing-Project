import { expect } from 'chai';
import map  from "../src/map.js";

describe('map.js - map function', () => {
  it('should map each element of the array using the iteratee function', () => {
    function square(n) {
      return n * n;
    }

    const inputArray = [4, 8];
    const expectedResult = [16, 64];

    const result = map(inputArray, square);

    expect(result).to.deep.equal(expectedResult);
  });

  it('should handle an empty array', () => {
    function square(n) {
      return n * n;
    }

    const inputArray = [];
    const expectedResult = [];

    const result = map(inputArray, square);

    expect(result).to.deep.equal(expectedResult);
  });

  it('should handle undefined and null array gracefully', () => {
    function square(n) {
      return n * n;
    }

    const undefinedArray = undefined;
    const nullArray = null;
    const expectedResult = [];

    const resultUndefined = map(undefinedArray, square);
    const resultNull = map(nullArray, square);

    expect(resultUndefined).to.deep.equal(expectedResult);
    expect(resultNull).to.deep.equal(expectedResult);
  });

  it('should correctly pass index and array arguments to the iteratee function', () => {
    const inputArray = [1, 2, 3];
    const expectedResult = [0, 6, 18];

    const result = map(inputArray, (value, index, array) => value * index * array.length);

    expect(result).to.deep.equal(expectedResult);
  });

  it('should work with function that takes no parameters', () => {
    const inputArray = [1, 2, 3];
    const expectedResult = [1, 1, 1];

    function returnOne() {
        return 1;
    }

    const result = map(inputArray, returnOne);

    expect(result).to.deep.equal(expectedResult);
  });

  it('should throw an error when the iteratee is not a function', () => {
    const inputArray = [1, 2, 3];
    const invalidIteratee = 'not a function';

    // Wrap the map function call in a function to capture the error
    const mapCall = () => map(inputArray, invalidIteratee);

    // Expect an error to be thrown
    expect(mapCall).to.throw(TypeError);
  });
});
