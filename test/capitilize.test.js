import { expect } from 'chai';
import capitalize  from "../src/capitalize.js";

describe('capitilize.js - capitalize first letter function and rest lowercase', function () {
    describe('With just strings', function () {
        it('with no capital letters', function (){
            expect(capitalize('product')).to.eql('Product');
        });
        it('with all capital letters', function (){
            expect(capitalize('PRODUCT')).to.eql('Product');
        });
        it('with partial capital letters', function (){
            expect(capitalize('pRoDUcT')).to.eql('Product');
        });
        it('with special characters', function (){
            expect(capitalize('!!#product')).to.eql('!!#product');
        });
        it('with multiple words', function (){
            expect(capitalize('amazing and best ever product')).to.eql('Amazing and best ever product');
        });
        it('with numbers included', function (){
            expect(capitalize('122 product')).to.eql('122 product');
        });
    });
    describe('With numbers', function () {
        it('with just numbers', function (){
            expect(capitalize(122)).to.eql('122');
        });
        
    });


});