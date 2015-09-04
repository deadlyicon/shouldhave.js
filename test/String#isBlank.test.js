require('../String#isBlank')

describe('String#isBlank', function() {

  var testCase = function(string, result){
    it('"'+string+'".isBlank() => '+result, function(){

    });
  };

  testCase('',        true);
  testCase(' ',       true);
  testCase('\t\r\n ', true);
  testCase('a',       false);
  testCase('\t y \n', false);

});
