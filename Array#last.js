if (!Array.prototype.last) {
  Array.prototype.last = function(length) {
    if (arguments.length === 0) return this[this.length-1];
    return this.slice(this.length - length, this.length);
  };
}
