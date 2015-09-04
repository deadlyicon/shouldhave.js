Object.fromTwoArrays = function(keys, values){
  var i = keys.length, object = {};
  while (i--) object[keys[i]] = values[i];
  return object;
};
