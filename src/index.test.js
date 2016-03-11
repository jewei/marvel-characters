var expect = require('chai').expect;
var marvel = require('./index');

describe('marvel-comics-characters', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(marvel.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Captain America`', function(){
        expect(marvel.all).to.include('Captain America');
    });
  });

  describe('random', function(){
    it('should return a random character from marvel.all', function() {
      var random = marvel.random();
      expect(marvel.all).to.include(random);
    });
  });
});
