if (!Object.isObject){
  require('./Object.type')
  Object.isObject = function (target){
    return Object.type(target) === 'Object';
  }
}
