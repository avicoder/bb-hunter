const expect = require('chai').expect;
const bbHunter = require('.');

describe('bb-hunter',function() {
    it('should have a list of all available names as strings', function(){
      expect(isArrayOfStrings(bbHunter.all)).to.be.true;
    })
    it('should have the item in the array', function(){
      expect(bbHunter.random()).to.satisfy(isInList(bbHunter.all))
    })

});

function isArrayOfStrings(array){
  return array.every(function(item){
    return typeof item === 'string';
  })
}

function isInList(array){
  return function(item){
    return array.includes(item)
  }
}
