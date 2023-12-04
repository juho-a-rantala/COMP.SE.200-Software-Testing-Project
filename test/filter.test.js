import { expect } from 'chai';
import filter  from "../src/filter.js";

describe('filter.js - filter function', () => {
    it('should return an empty array for an empty input array', () => {
      const result = filter([], () => true);
      expect(result).to.deep.equal([]);
    });
  
    it('should filter elements based on the provided predicate function', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (value) => value % 2 === 0;
      const result = filter(array, predicate);
  
      expect(result).to.deep.equal([2, 4]);
    });
  
    it('should maintain the order of elements in the filtered array', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (value) => value > 2;
      const result = filter(array, predicate);
  
      expect(result).to.deep.equal([3, 4, 5]);
    });
  
    it('should handle a predicate that always returns truthy', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = () => true;
      const result = filter(array, predicate);
  
      expect(result).to.deep.equal(array);
    });
  
    it('should handle a predicate that always returns falsy', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = () => false;
      const result = filter(array, predicate);
  
      expect(result).to.deep.equal([]);
    });
  
    it('should not modify the original array', () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (value) => value != 1;
      const filteredArray = filter(array, predicate);
  
      // Check that the original array remains unchanged
      expect(array).to.deep.equal([1, 2, 3, 4, 5]);

      // Check that the filter returned modified array
      expect(filteredArray).to.deep.eq([2, 3, 4, 5]);
    });
  });