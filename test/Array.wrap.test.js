require('../Array.wrap')

describe('Array.wrap', function() {
  describe('when given an array', function() {
    it('should return that same array', function () {
      array = []
      expect(Array.wrap(array)).to.be(array)
    });
  });
  describe('when given anything other than an array', function() {
    it('should return that object wrapped in an array', function () {
      expect( Array.wrap(5)     ).to.eql( [5]     )
      expect( Array.wrap({1:2}) ).to.eql( [{1:2}] )
    });
  });
});
