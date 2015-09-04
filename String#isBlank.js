/**
 *  String#isBlank() -> Boolean
 *
 *  Check if the string is "blank" &mdash; either empty (length of `0`) or
 *  containing only whitespace.
 *
 *  ##### Example
 *
 *      ''.isBlank();
 *      //-> true
 *
 *      '  '.isBlank();
 *      //-> true
 *
 *      ' a '.isBlank();
 *      //-> false
**/
String.prototype.isBlank = function(pattern) {
  return /^\s*$/.test(this);
};
