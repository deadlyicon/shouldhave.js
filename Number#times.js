/**
 * Runs the given iterator N times
 * @module Number
 * @param {function} iterator
 * @example
 *     (2).times(function(){ });
**/
Number.prototype.times = function(iterator) {
  var index = 0;
  while(index < this) iterator(index++);
  return this
};
