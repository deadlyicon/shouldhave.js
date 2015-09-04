// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (!Object.bindAll) {
  Object.defineProperty(Object, 'bindAll', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }
      for (var p in target){
        var value = target[p];
        if (typeof value === 'function'){
          target[p] = value.bind(target)
        }
      }
      return undefined;
    }
  });
}
