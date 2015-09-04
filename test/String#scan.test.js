require('../String#scan')

describe('String#scan', function() {

  it('should scan', function () {
    var source = 'foo boo boz', results = [];
    var str = source.scan(/[o]+/, function(match) {
      results.push(match[0]);
    });
    expect(results).to.eql(['oo', 'oo', 'o']);

    var iteratorCalled = false
    var result = source.scan(/x/, function () {
      iteratorCalled = true
    });
    expect(iteratorCalled).to.be(false);
    expect(result).to.equal(source);
    expect(str).to.be.a('string');
  });

});


