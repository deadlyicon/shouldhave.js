if (!Object.clone) {
  require('./Object.assign')
  Object.defineProperty(Object, 'clone', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      return Object.assign({}, target);
    }
  });
}
