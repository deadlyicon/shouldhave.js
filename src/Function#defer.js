if (!Function.prototype.defer){
  Function.prototype.defer = function(){
    setTimeout(this, 0)
  };
}


