require('../Object.fromTwoArrays')

describe('Object.fromTwoArrays', function() {
  it('should work', function () {
    object = Object.fromTwoArrays(['a','b','c'],[1,2,3])
    expect(object).to.eql({'a':1,'b':2,'c':3})
  });
});
