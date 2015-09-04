require('../Array#flatten')

describe('Array#flatten', function() {
  it('should flatten all arrays', function () {
    expect( [1,[2],[[[[3]]]]].flatten() ).to.eql [1,2,3,4]
  });
});
