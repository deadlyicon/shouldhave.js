require('../String#startsWith')

describe('String#startsWith', function() {

  var testCase = function(string, part, position, result){
    args = '"'+part+'"'
    if (position !== null) args += ', '+position;
    it('"'+string+'".startsWith('+args+') => "'+result+'"', function(){
      expect( string.startsWith(part, position) ).to.equal(result);
    });
  }

  testCase( 'hello world', 'h',     null, true)
  testCase( 'hello world', 'hello', null, true)
  testCase( 'hello world', 'bye',   null, false)
  testCase( '',            'bye',   null, false)
  testCase( 'hell',        'hello', null, false)

  var str = "To be, or not to be, that is the question";
  testCase( str, "To be",     null, true)
  testCase( str, "not to be", null, false)
  testCase( str, "not to be", 10,   true)
});

