if (!Function.prototype.delay){
  Function.prototype.delay = function(milliseconds){
    if (arguments.length===0){ milliseconds = 0; }
    setTimeout(this, milliseconds)
  };
}


