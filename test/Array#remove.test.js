require('../Array#remove')

describe('Array#remove', function() {
  it('should remove all instances of the given object', function () {

    things = ['shoe','string','ball']
    things.remove('ball')
    expect(things).to.eql(['shoe','string'])

  });
});
