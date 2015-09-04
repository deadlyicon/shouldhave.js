// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.remove) {
  Array.prototype.remove = function(target) {
    do {
      index = this.indexOf(target)
      if (index !== -1) this.splice(index, 1);
    }while(index !== -1)
    return this;
  };
}
