require('../String#dasherize')

describe('String#dasherize', function() {

  var testCase = function(from, to){
    it('"'+from+'".dasherize() => "'+to+'"', function(){
      expect( from.dasherize() ).to.equal(to);
    });
  }

  testCase("one two",            "one two");
  testCase("special_guest",      "special-guest");
  testCase("one two-three_four", "one two-three-four");

});
