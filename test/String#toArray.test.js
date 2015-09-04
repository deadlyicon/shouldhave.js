require('../String#toArray')

describe('String#toArray', function() {

  it('#toArray', function () {
    expect( ''.toArray()    ).to.eql( []            );
    expect( 'a'.toArray()   ).to.eql( ['a']         );
    expect( 'ab'.toArray()  ).to.eql( ['a','b']     );
    expect( 'foo'.toArray() ).to.eql( ['f','o','o'] );
  });

});
