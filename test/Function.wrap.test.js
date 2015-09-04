require('../Function.wrap')

describe('Function.wrap', function() {
  it('should wrap the function on the given object', function () {

    var speak = function(message){
      return this.name+' says: '+message;
    };

    var person = {
      name: 'bob',
      speak: speak,
    };

    expect(person.speak).to.be(speak)
    expect(person.speak('hi there')).to.eql('bob says: hi there')

    Function.wrap(person, 'speak', function(speak, message){
      return speak.call(this, message).toUpperCase();
    });

    expect(person.speak).to.not.be(speak)
    expect(person.speak('hi there')).to.eql('BOB SAYS: HI THERE')

  });
});
