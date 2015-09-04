require('./Object.isString');

String.prototype.scan = function(pattern, iterator){
  this.gsub(pattern, iterator);
  return String(this);
};
