if (!Array.prototype.unique) {
  Array.prototype.unique = function(){
    var item, uniques = [], i = this.length
    while (i--){
      item = this[i];
      if (uniques.indexOf(item) === -1){
        uniques.unshift(item)
      }
    }
    return uniques
  };
}


