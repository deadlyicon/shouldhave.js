require('../String#endsWith')

describe('String#endsWith', function() {

  it('"".endsWith("") => true', function(){
    expect( "".endsWith('') ).to.be(true);
  });

  it('"".endsWith("x") => false', function(){
    expect( "".endsWith("x") ).to.be(false);
  });

  it('" ".endsWith(" ") => true', function(){
    expect( " ".endsWith(" ") ).to.be(true);
  });

  it('"slaughter".endsWith("laughter") => true', function(){
    expect( "slaughter".endsWith("laughter") ).to.be(true);
  });

  it('"slaughter".endsWith("laugh", 6) => true', function(){
    expect( "slaughter".endsWith("laugh", 6) ).to.be(true);
  });

});
