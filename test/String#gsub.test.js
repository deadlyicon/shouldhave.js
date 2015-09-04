require('../String#gsub')

describe('String#gsub', function() {

  it('with replacement function', function(){
    var source = 'foo boo boz';

    assert_equal('Foo Boo BoZ',
      source.gsub(/[^o]+/, function(match) {
        return match[0].toUpperCase();
      }));
    assert_equal('f2 b2 b1z',
      source.gsub(/o+/, function(match) {
        return match[0].length;
      }));
    assert_equal('f0 b0 b1z',
      source.gsub(/o+/, function(match) {
        return match[0].length % 2;
      }));
  });

  it('with replacement string', function(){
    var source = 'foo boo boz';

    assert_equal('foobooboz',
      source.gsub(/\s+/, ''));
    assert_equal('  z',
      source.gsub(/(.)(o+)/, ''));

    assert_equal('ウィメンズ2007<br/>クルーズコレクション',
      'ウィメンズ2007\nクルーズコレクション'.gsub(/\n/,'<br/>'));
    assert_equal('ウィメンズ2007<br/>クルーズコレクション',
      'ウィメンズ2007\nクルーズコレクション'.gsub('\n','<br/>'));

    assert_equal('barfbarobarobar barbbarobarobar barbbarobarzbar',
      source.gsub('', 'bar'));
    assert_equal('barfbarobarobar barbbarobarobar barbbarobarzbar',
      source.gsub(new RegExp(''), 'bar'));
  });

  it('with troublesome characters', function(){
    assert_equal('ab', 'a|b'.gsub('|', ''));
    assert_equal('ab', 'ab(?:)'.gsub('(?:)', ''));
    assert_equal('ab', 'ab()'.gsub('()', ''));
    assert_equal('ab', 'ab'.gsub('^', ''));
    assert_equal('ab', 'a?b'.gsub('?', ''));
    assert_equal('ab', 'a+b'.gsub('+', ''));
    assert_equal('ab', 'a*b'.gsub('*', ''));
    assert_equal('ab', 'a{1}b'.gsub('{1}', ''));
    assert_equal('ab', 'a.b'.gsub('.', ''));
  });

  it('with zero-length match', function(){
    assert_equal('ab', 'ab'.gsub('', ''));
    assert_equal('a', 'a'.gsub(/b*/, 'c'));
    assert_equal('abc', 'abc'.gsub(/b{0}/, ''));
  });


});
