require('../Object.keys')

describe('Object.keys', function() {
  it('should return an array of the keys of a given object', function () {

    var target = {a:1,b:2,c:3};
    var keys = Object.keys(target);

    expect(keys).to.be.an('array');
    expect(keys).to.eql(['a','b','c']);

  });
});
