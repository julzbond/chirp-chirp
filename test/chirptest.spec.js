var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var chirp = require ('../chirp.js');

describe ("chirp", function(){

  it('should be a function', function(){
    console.log(typeof chirp);
    expect(chirp).to.be.a('function');
  });

  //Calling chirp(3) should return a string of three chirps

  it('should return a string of chirps based on the number passed in', function(){
    var chirps = chirp(3);
    expect(chirps).to.be.a('string');
    expect(chirps).to.equal('chirp chirp chirp');
  });

  //Passing a data type that is not a number should return null

  it('should only take a number as a parameter', function(){
    expect(chirp('cat')).to.equal(null);
    expect(chirp(true)).to.equal(null);
    expect(chirp({})).to.equal(null);
    expect(chirp([2, 3, 1])).to.equal(null);
    expect(chirp()).to.equal(null);
  });

  //Passing a number that is negatve or zero should return null

  it('should only take a positive number as a parameter', function(){
    expect(chirp(-1)).to.equal(null);
    expect(chirp(0)).to.equal(null);
  });

  //Passing a number that is not an integer should return null

  it('should only take integers as a parameter', function(){
    expect(chirp(1.2)).to.equal(null);
    expect(chirp(0.123)).to.equal(null);
  });

});