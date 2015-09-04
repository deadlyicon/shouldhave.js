require('../String#isEmpty')

describe('String#isEmpty', function() {

  var testCase = function(string, result){
    it('"'+string+'".isEmpty() => '+result, function(){

    });
  };

  testCase('',        true);
  testCase(' ',       false);
  testCase('\t\r\n ', false);
  testCase('a',       false);
  testCase('\t y \n', false);

});
