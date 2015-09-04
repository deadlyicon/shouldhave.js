// Function.wrap(object, 'property', wrapper) -> Function
//
// - @param {object}
// - @param {string} [property]
// - @param {function} [wrapper] A function to wrap the left function
// - @return {function} [wrapped] A function that calls the given function
//
// #### example
//
// ```js
// Function.wrap(object, 'property', function($super){
//    return $super.apply(this, arguments);
// })
// ```
//
// ### Note:
//
// This is here instead of in `Function.wrap.js` because
// you shouldn't have the instance method without
// the class method. It would just be confusing.
if (!Function.wrap){
  Function.wrap = function(object, property, wrapper){
    var func = object[property];
    return object[property] = func.wrap(wrapper);
  };
}

//  Function#wrap(wrapper) -> Function
//  - wrapper (Function): The function to use as a wrapper.
//
//  Returns a function "wrapped" around the original function.
//
//  [[Function#wrap]] distills the essence of aspect-oriented programming into
//  a single method, letting you easily build on existing functions by
//  specifying before and after behavior, transforming the return value, or
//  even preventing the original function from being called.
//
//  The wraper function is called with this signature:
//
//      function wrapper(callOriginal[, args...])
//
//  ...where `callOriginal` is a function that can be used to call the
//  original (wrapped) function (or not, as appropriate). (`callOriginal` is
//  not a direct reference to the original function, there's a layer of
//  indirection in-between that sets up the proper context \[`this` value\] for
//  it.)
//
//  ##### Example
//
// ```js
//      // Wrap String#capitalize so it accepts an additional argument
//      String.prototype.capitalize = String.prototype.capitalize.wrap(
//        function(callOriginal, eachWord) {
//          if (eachWord && this.include(" ")) {
//            // capitalize each word in the string
//            return this.split(" ").invoke("capitalize").join(" ");
//          } else {
//            // proceed using the original function
//            return callOriginal();
//          }
//        });
//
//      "hello world".capitalize();
//      // -> "Hello world" (only the 'H' is capitalized)
//      "hello world".capitalize(true);
//      // -> "Hello World" (both 'H' and 'W' are capitalized)
// ```
//
// ```js
// (function(n){ return n + 10; }).wrap(function($super, n){
//   return $super(n) - 5;
// });
// ```
if (!Function.prototype.wrap){
  Function.prototype.wrap = function(wrapper){
    var func = this;
    return function(){
      var args = [].slice.apply(arguments)
      args.unshift(func)
      return wrapper.apply(this, args);
    };
  };
}
