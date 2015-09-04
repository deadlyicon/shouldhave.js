require('../Object.bindAll')

describe('Object.bindAll', function() {
  it('should bind all functions to the target', function () {

    var x;
    var firstName = function(){ return this; };
    var lastName  = function(){ return this; };
    var target = {
      name:      'steve',
      firstName: firstName,
      lastName:  lastName,
    };
    Object.bindAll(target);

    expect(target.name).to.be('steve');

    expect(target.firstName).to.not.be(firstName);
    expect(target.firstName).to.be.a('function');
    expect(target.firstName()).to.be(target);
    x = target.firstName;
    expect(x()).to.be(target);

    expect(target.lastName).to.not.be(lastName);
    expect(target.lastName).to.be.a('function');
    expect(target.lastName()).to.be(target);
    x = target.lastName;
    expect(x()).to.be(target);

  });
});
