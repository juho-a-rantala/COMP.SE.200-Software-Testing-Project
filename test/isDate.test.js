import { expect } from 'chai';
import nodeTypes from '../src/.internal/nodeTypes.js'
import isDate  from "../src/isDate.js";

describe('isDate.js - returns true if is valid date', function () {
    it('should return true for a valid Date object', () => {
        expect(isDate(new Date())).to.eql(true);
      });
    
      it('should return true for a valid Date object created with a timestamp', () => {
        expect(isDate(new Date(1638240000000))).to.eql(true);
      });
    
      it('should return false for a string that resembles a date', () => {
        expect(isDate('Mon April 23 2012')).to.eql(false);
      });
    
      it('should return false for a plain object', () => {
        expect(isDate({ key: 'value' })).to.eql(false);
      });
    
      it('should return false for a number', () => {
        expect(isDate(42)).to.eql(false);
      });
    
      it('should return false for null', () => {
        expect(isDate(null)).to.eql(false);
      });
    
      it('should return false for undefined', () => {
        expect(isDate(undefined)).to.eql(false);
      });
      it('should return false for an array', () => {
        expect(isDate([1, 2, 3])).to.eql(false);
      });
      it('should return false for custom date object', () => {
        let customDateObj = {};
        customDateObj.date = Date.now();
        expect(isDate(customDateObj)).to.eql(false);
      });
      
      it('should return false for custom date object', () => {
        expect(isDate(nodeTypes.isDate)).to.eql(false);
      });
      
    
      

});