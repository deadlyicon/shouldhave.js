// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.isArray) {
  Array.isArray = function(target) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
