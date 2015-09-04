var isArray = require('./isArray')
var slice = require('./slice')

module.exports = function(object){
  if (object == null) return [];
  if (isArray(object)) return object
  if (typeof object === 'object' && typeof object.length === 'number') return slice(object)
  return [object];
};

