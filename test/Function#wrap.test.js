require('../Function#wrap')

describe('Function#wrap', function() {
  it('should return a function that calls the given function with the origin function as a prepended argument', function () {

    var speak = function(message){
      return 'bob says: '+message;
    };

    expect(speak('hi there')).to.eql('bob says: hi there')

    scream = speak.wrap(function(speak, message){
      return speak(message).toUpperCase();
    });

    expect(scream('hi there')).to.eql('BOB SAYS: HI THERE')

  });
});
