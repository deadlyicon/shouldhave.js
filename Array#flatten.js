if (!Array.prototype.flatten) !(function(){

  require('./Array#reduce')

  var isArray = require('./isArray')

  var iterator = function(array, item){
    return array.concat( isArray(item) ? item.flatten() : item );
  };

  Array.prototype.flatten = function() {
    return this.reduce(iterator, []);
  };

})();
