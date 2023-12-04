import { expect } from 'chai';
import every  from "../src/every.js";

describe('every.js - every function', () => {
  it('should return true for an array with all truthy values', () => {
    const result = every([true, 1, 'yes'], Boolean);
    expect(result).to.be.true;
  });

  it('should return false for an array with at least one falsy value', () => {
    const result = every([true, 1, null, 'yes'], Boolean);
    expect(result).to.be.false;
  });

  it('should return true for an empty array', () => {
    const result = every([], Boolean);
    expect(result).to.be.true;
  });

  it('should correctly pass value, index, and array to the predicate function', () => {
    const array = ['apple', 'orange', 'banana'];
    const predicate = (value, index, arr) => {
      expect(value).to.equal(array[index]);
      expect(arr).to.deep.equal(array);
      return true;
    };

    const result = every(array, predicate);
    expect(result).to.be.true;
  });

  it('should handle arrays with undefined values correctly', () => {
    const array = [undefined, undefined, undefined];
    const result = every(array, (value) => value === undefined);
    expect(result).to.be.true;
  });

  it('should return false for arrays with undefined values and non-matching predicate', () => {
    const array = [undefined, undefined, undefined];
    const result = every(array, Boolean);
    expect(result).to.be.false;
  });

  it('should handle arrays with null values correctly', () => {
    const array = [null, null, null];
    const result = every(array, (value) => value === null);
    expect(result).to.be.true;
  });

  it('should return false for arrays with null values and non-matching predicate', () => {
    const array = [null, null, null];
    const result = every(array, Boolean);
    expect(result).to.be.false;
  });
});
