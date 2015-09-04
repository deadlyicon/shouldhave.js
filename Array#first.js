if (!Array.prototype.first) {
  Array.prototype.first = function(length) {
    if (arguments.length === 0) return this[0];
    return this.slice(0, length);
  };
}
