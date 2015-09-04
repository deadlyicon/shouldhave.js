global.expect = require('expect.js')
global.assert_equal = function(a,b){
  return expect(a).to.equal(b);
};
