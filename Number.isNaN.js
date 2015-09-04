Number.isNaN = function(object){
  return typeof object === 'number' && String(object) === "NaN";
};
