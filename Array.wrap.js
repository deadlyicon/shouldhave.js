var isArray = require('./isArray');

if (!Array.wrap) {
  Array.wrap = function(target) {
    return isArray(target) ? target : [target]
  };
}
