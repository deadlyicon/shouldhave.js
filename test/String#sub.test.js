require('../String#sub')

describe('String#sub', function() {
  var source = 'foo boo boz';

  it('with replacement function', function(){

    assert_equal('Foo boo boz',
      source.sub(/[^o]+/, function(match) {
        return match[0].toUpperCase();
      }), 1);
    assert_equal('Foo Boo boz',
      source.sub(/[^o]+/, function(match) {
        return match[0].toUpperCase();
      }, 2), 2);
    assert_equal(source,
      source.sub(/[^o]+/, function(match) {
        return match[0].toUpperCase();
      }, 0), 0);
    assert_equal(source,
      source.sub(/[^o]+/, function(match) {
        return match[0].toUpperCase();
      }, -1), -1);
  });

  it('with replacement string', function(){

    assert_equal('oo boo boz',
      source.sub(/[^o]+/, ''));
    assert_equal('oooo boz',
      source.sub(/[^o]+/, '', 2));
  });


});
