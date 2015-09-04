require('./Object.isFunction');
require('./Object.isString');
require('./RegExp.escape');

String.prototype.gsub = function(pattern, replacement) {
  var result = '', source = this, match, replacer;

  replacer = Object.isFunction(replacement) ?
    replacement :
    function(){ return replacement };

  if (Object.isString(pattern))
    pattern = RegExp.escape(pattern);

  if (pattern.length === 0 || pattern.source === '(?:)'){
    replacement = replacer('');
    return replacement + source.split('').join(replacement) + replacement;
  }

  while (source.length > 0) {
    match = source.match(pattern)
    if (match && match[0].length > 0) {
      result += source.slice(0, match.index);
      result += replacer(match);
      source  = source.slice(match.index + match[0].length);
    } else {
      result += source;
      source = '';
    }
  }
  return result;
};
