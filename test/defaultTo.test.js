import { expect } from 'chai';
import defaultTo  from "../src/defaultTo.js";

describe('defaultTo.js - defaultTo function', () => {
  it('should return the original value if not NaN, null, or undefined', () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo('hello', 'world')).to.equal('hello');
    expect(defaultTo(false, true)).to.equal(false);
    expect(defaultTo({name: "test"}, {default: "value"})).to.deep.equal({name: "test"});
  });

  it('should return the default value if value is NaN', () => {
    expect(defaultTo(NaN, 10)).to.equal(10);
  });

  it('should return the default value if value is null', () => {
    expect(defaultTo(null, {default: "value"})).to.deep.equal({default: "value"});
  });

  it('should return the default value if value is undefined', () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });

  it('should return the default value if value is null or undefined', () => {
    expect(defaultTo(null, "default")).to.equal("default");
    expect(defaultTo(undefined, "default")).to.equal("default");
  });

  it('should return the default value for NaN, null, or undefined in any order', () => {
    expect(defaultTo(NaN, "a")).to.equal("a");
    expect(defaultTo(null, "a")).to.equal("a");
    expect(defaultTo(undefined, "a")).to.equal("a");
  });
});
