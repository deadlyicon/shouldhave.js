require('../String#camelize')

describe('String#camelize', function() {

  var testCase = function(from, to){
    it('"'+from+'".camelize() => "'+to+'"', function(){
      expect( from.camelize() ).to.equal(to);
    });
  }

  // testCase("product",                "Product");
  // testCase("special_guest",          "SpecialGuest");
  // testCase("application_controller", "ApplicationController");
  // testCase("area51_controller",      "Area51Controller");

  // This camelize is different than ActiveSupport :/

  testCase('',                    '');
  testCase('-',                   '');
  testCase('foo',                 'foo');
  testCase('foo_bar',             'foo_bar');
  testCase('-foo-bar',            'FooBar');
  testCase('FooBar',              'FooBar');
  testCase('foo-bar',             'fooBar');
  testCase('border-bottom-width', 'borderBottomWidth');
  testCase('class-name-test',     'classNameTest');
  testCase('className-test',      'classNameTest');
  testCase('class-nameTest',      'classNameTest');

});
