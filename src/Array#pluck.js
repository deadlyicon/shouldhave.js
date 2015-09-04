if (!Array.prototype.pluck) {
  Array.prototype.pluck = function(property) {
    return this.map(function(member){
      return member[property];
    });
  };
}
