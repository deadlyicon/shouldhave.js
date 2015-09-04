require('../String#capitalize')

describe('String#capitalize', function() {

  var testCase = function(from, to){
    it('"'+from+'".capitalize() => "'+to+'"', function(){
      expect( from.capitalize() ).to.equal(to);
    });
  }

  testCase("product",       "Product");
  testCase("special_guest", "Special_guest");
  testCase("Peter Sellars", "Peter sellars");

  testCase('',            '');
  testCase('ä',           'Ä');
  testCase('A',           'A');
  testCase('hello',       'Hello');
  testCase('HELLO',       'Hello');
  testCase('Hello',       'Hello');
  testCase('hello WORLD', 'Hello world');

});
