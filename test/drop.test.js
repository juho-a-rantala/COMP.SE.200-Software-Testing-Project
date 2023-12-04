import { expect } from 'chai';
import drop  from "../src/drop.js";

const mixedArray = [1,2, 2.5, 'apple', 'orange', true];

describe('drop.js - slice an array from the given distance from beginning', function () {
    it('Should return same array when distance 0', function (){
        expect(drop(mixedArray, 0)).to.eql(mixedArray);
    });
    it('Should return empty array when distance larger than length of array', function (){
        expect(drop(mixedArray, 9)).to.eql([]);
    });
    it('Should splice with only first element without distance', function (){
        expect(drop(mixedArray)).to.eql([2, 2.5, 'apple', 'orange', true]);
    });
    it('Should splice off number of elements given by distance', function (){
        expect(drop(mixedArray, 3)).to.eql([ 'apple','orange', true]);
    });
    it('Should return empty with integer with default splice', function (){
        expect(drop(1)).to.eql([]);
    });
    it('Should return empty with integer with distance 0', function (){
        expect(drop(1, 0)).to.eql([]);
    });
    it('Should return empty with string', function (){
        expect(drop('string')).to.eql([]);
    });
    it('Should return empty with null', function (){
        expect(drop(null)).to.eql([]);
    });
    it('Should return original when distance < 0', function (){
        expect(drop(mixedArray, -2)).to.eql(mixedArray);
    });

    
});