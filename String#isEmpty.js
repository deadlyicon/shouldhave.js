/**
 *  String#empty() -> Boolean
 *
 *  Checks if the string is empty.
 *
 *  ##### Example
 *
 *      ''.empty();
 *      //-> true
 *
 *      '  '.empty();
 *      //-> false
**/
String.prototype.isEmpty = function(pattern) {
  return this == '';
};
