if (!Array.prototype.without) {
  Array.prototype.without = function() {
    'use strict';
    var member, index, i = arguments.length;
    while (i--){
      member = arguments[i]
      index = this.indexOf(member)
      while (index !== -1) {
        this.splice(index, 1);
        index = this.indexOf(member)
      }
    }
    return this;
  };
}
