if (!Array.prototype.includes) {
  Array.prototype.includes = function(target) {
    return this.indexOf(target) !== -1;
  };
}
