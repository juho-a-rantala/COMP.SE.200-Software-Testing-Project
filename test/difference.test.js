import { expect } from 'chai';
import difference  from "../src/difference.js";

const stringArray = ['apple', 'orange', 'pineapple'];
const mixedArray = ['apple', 1, 'orange', 5.02, 'pineapple', true]

describe('difference.js - exclude values from array', function () {
    describe('Uniform array', function () {
        it('Remove all', function (){
            expect(difference(stringArray, stringArray)).to.eql([]);
        });
        it('Remove one', function (){
            expect(difference(stringArray, ['apple'])).to.eql(['orange', 'pineapple']);
        });
        it('Remove several but not all', function (){
            expect(difference(stringArray, ['apple', 'pineapple'])).to.eql(['orange']);
        });
        it('Remove none', function (){
            expect(difference(stringArray, ['strawberry'])).to.eql(stringArray);
        });       
    });
    describe('Mixed array', function () {
        it('Remove all', function (){
            expect(difference(mixedArray, mixedArray)).to.eql([]);
        });
        it('Remove one', function (){
            expect(difference(mixedArray, ['orange'])).to.eql(['apple', 1, 5.02, 'pineapple', true]);
        });
        it('Remove several but not all', function (){
            expect(difference(mixedArray, [5.02 ,'apple', 'pineapple' ])).to.eql([1,'orange',true]);
        }); 
        it('Remove none', function (){
            expect(difference(mixedArray, [7.05, false, 'strawberry'])).to.eql(mixedArray);
        });      
    });
    describe('Wrong input elements', function () {
        
        it('Exclusion not array', function (){
            expect(difference(mixedArray, 'apple')).to.eql(mixedArray);
        });
        it('Search array not array', function (){
            expect(difference('apple', ['orange'])).to.eql([]);
        });
        it('Neither input is array', function (){
            expect(difference('apple', 1)).to.eql([]);
        });
    });
});