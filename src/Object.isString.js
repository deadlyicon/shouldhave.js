require('./Object.type');

Object.isString = function(object) {
  return Object.type(object) === 'String';
};
