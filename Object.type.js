require('./Number.isNaN');

Object.type = function(object) {
  if (Number.isNaN(object)) return 'NaN';
  return Object.prototype.toString.call(object).slice(8,-1)
};
