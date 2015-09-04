require('../String#underscore')

describe('String#underscore', function() {

  var testCase = function(from, to){
    it('"'+from+'".underscore() => "'+to+'"', function(){
      expect( from.underscore() ).to.equal(to);
    });
  }

  testCase('', '');
  testCase('-', '_');
  testCase('foo', 'foo');
  testCase('Foo', 'foo');
  testCase('foo_bar', 'foo_bar');
  testCase('borderBottom', 'border_bottom');
  testCase('borderBottomWidth', 'border_bottom_width');
  testCase('border-Bottom-Width', 'border_bottom_width');

});
