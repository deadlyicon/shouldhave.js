// require('./Promise')

/**
 *  # wait
 *
 *  An alternate interface to setTimeout that uses promises
 *
 *  #### Examples
 *
 *    wait(2000).then(function(){
 *
 *    })
 *
**/
wait = function(milliseconds){
  return new Promise(function(resolve, reject){
    setTimeout(function(){ resolve(); }, milliseconds);
  });
};
