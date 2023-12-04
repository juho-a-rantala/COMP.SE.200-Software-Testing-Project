import { expect } from 'chai';
import isEmpty  from "../src/isEmpty.js";



describe('isEmpty.js - returns true if array, object or map is empty', function () {
    it('returns true for an empty array', function () {
        expect(isEmpty([])).to.eql(true);
      });
      
      it('returns false for a non-empty array', function () {
        expect(isEmpty(['apple'])).to.eql(false);
      });
      
      it('returns true for an empty string', function () {
        expect(isEmpty('')).to.eql(true);
      });
      
      it('returns false for a non-empty string', function () {
        expect(isEmpty('apple')).to.eql(false);
      });
      
      it('returns true for an empty Map', function () {
        const emptyMap = new Map();
        expect(isEmpty(emptyMap)).to.eql(true);
      });
      
      it('returns false for a non-empty Map', function () {
        const nonEmptyMap = new Map();
        nonEmptyMap.set('key', 1);
        expect(isEmpty(nonEmptyMap)).to.eql(false);
      });
      
      it('returns true for an empty Object', function () {
        const emptyObj = {};
        expect(isEmpty(emptyObj)).to.eql(true);
      });
      
      it('returns false for a non-empty Object', function () {
        const nonEmptyObj = { value1: "something" };
        expect(isEmpty(nonEmptyObj)).to.eql(false);
      });
      
      it('returns true for an empty Set', function () {
        const emptySet = new Set();
        expect(isEmpty(emptySet)).to.eql(true);
      });
      
      it('returns false for a non-empty Set', function () {
        const nonEmptySet = new Set();
        nonEmptySet.add(1);
        expect(isEmpty(nonEmptySet)).to.eql(false);
      });
      it('returns true for null', function () {
        expect(isEmpty(null)).to.eql(true);
      });
      it('returns true for prototype', function () {
        expect(isEmpty(Object.prototype)).to.eql(true);
      });
      it('returns true for prototype', function () {
        expect(isEmpty(Object.prototype)).to.eql(true);
      });
      it('returns false for prototype with content', function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.gender = "man";
        expect(isEmpty(Person.prototype)).to.eql(false);
      });
      it('should return true for empty typed array', () => {
        const value = new Uint8Array([]);
        expect(isEmpty(value)).to.eql(true);
      });
      it('should return false for typed array', () => {
        const value = new Uint8Array([1, 2, 3]);
        expect(isEmpty(value)).to.eql(false);
      });
      it('should return false for an arguments object', () => {
        function testFunction() {
          expect(isEmpty(arguments)).to.eql(false);
        }
        testFunction(1, 2, 3);
      });
      it('should return true for empty arguments object', () => {
        function testFunction() {
          expect(isEmpty(arguments)).to.eql(true);
        }
        testFunction();
      });
      
});