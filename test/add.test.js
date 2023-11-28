import { expect } from 'chai';
import add  from "../src/add.js";


describe('add.js - add function', function () {

  describe('integers', function() {
    describe('positive numbers', function() {
      it('should add two positive integers', function() {
        expect(add(2,2)).to.eql(4);
      });
  
      it('should work with augend zero', function() {
        expect(add(0,2)).to.eql(2);
      });
    
      it('should work with addend zero', function() {
        expect(add(2, 0)).to.eql(2);
      });
    
    });
  
    describe('negative numbers', function() {
      it('should add two negative integers', function() {
        expect(add(-2,-2)).to.eql(-4);
      })
  
      it('should work with augend zero', function() {
        expect(add(0,-2)).to.eql(-2);
      })
    
      it('should work with addend zero', function() {
        expect(add(-2, 0)).to.eql(-2);
      })
    
    });
  
    describe('mixed signs', function() {
      it('should add positive to negative', function() {
        expect(add(2, -3)).to.eql(-1);
      })

      it('should add negative to positive', function() {
        expect(add(-2, 3)).to.eql(1);
      })
    
    });

    describe('large integers', function() {
      it('should handle max - 1', function() {
        expect(add(Number.MAX_SAFE_INTEGER, -1)).to.eql(Number.MAX_SAFE_INTEGER-1);
      });

      it('should handle min + 1', function() {
        expect(add(Number.MIN_SAFE_INTEGER, 1)).to.eql(Number.MIN_SAFE_INTEGER+1);
      });
    });

  });

  describe('decimal numbers', function() {
    describe('positive numbers', function() {
      it('should add two positive decimal numbers', function() {
        expect(add(2.1,2.1)).to.eql(4.2);
      });
  
      it('should work with augend zero', function() {
        expect(add(0,2.1)).to.eql(2.1);
      });
    
      it('should work with addend zero', function() {
        expect(add(2.1, 0)).to.eql(2.1);
      });
    
    });
  
    describe('negative numbers', function() {
      it('should add two negative decimal numbers', function() {
        expect(add(-2.1,-2.1)).to.eql(-4.2);
      })
  
      it('should work with augend zero', function() {
        expect(add(0,-2.1)).to.eql(-2.1);
      })
    
      it('should work with addend zero', function() {
        expect(add(-2.1, 0)).to.eql(-2.1);
      })
    
    });
  
    describe('mixed signs', function() {
      it('should add positive to negative', function() {
        expect(parseFloat(add(2.1, -3.8).toFixed(1))).to.eql(-1.7);
      })

      it('should add negative to positive', function() {
        expect(parseFloat(add(-2.1, 3.8).toFixed(1))).to.eql(1.7);
      })
    
    });

    describe('large decimal numbers', function() {
      it('should handle max - 1', function() {
        expect(add(Number.MAX_VALUE, -1)).to.eql(Number.MAX_VALUE-1);
      });

      it('should handle -max + 1', function() {
        expect(add(-Number.MAX_VALUE, 1)).to.eql(-Number.MAX_VALUE+1);
      });
    });

    describe('small decimal numbers', function() {
      it('should handle min + min', function() {
        expect(add(Number.MIN_VALUE, Number.MIN_VALUE)).to.eql(Number.MIN_VALUE + Number.MIN_VALUE);
      });

      it('should handle min + 0', function() {
        expect(add(Number.MIN_VALUE, 0)).to.eql(Number.MIN_VALUE);
      });
    });
  });

  describe('NaN', function() {
    it('should augend NaN results to NaN', function() {
      expect(add(NaN, 1)).to.eql(NaN);
    });

    it('should result to NaN when added is NaN', function() {
      expect(add(0, NaN)).to.eql(NaN);
    });

    it('should result to NaN when Nan + Nan', function() {
      expect(add(NaN, NaN)).to.eql(NaN);
    });

  
  });
  describe('incorrect parameter type', function() {

    it('should result to Number when String + Number', function() {
      expect(add('1', 0)).to.be.a('number');
    })
  });

  it('should work with both zero', function() {
    expect(add(0, 0)).to.eql(0);
  });


});
