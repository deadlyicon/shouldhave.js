require('../Number#times')

describe('Number#times', function() {

  it('loop that many times', function () {
    var results = [];
    (5).times(function(i) { results.push(i); });
    expect(results).to.eql([0,1,2,3,4])
  });

});
