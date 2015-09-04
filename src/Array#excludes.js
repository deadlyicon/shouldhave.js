if (!Array.prototype.excludes) {
  Array.prototype.excludes = function(target) {
    return this.indexOf(target) === -1;
  };
}
