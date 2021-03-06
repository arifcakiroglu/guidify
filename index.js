
/**
 * Return a globally unique identifier.
 *
 * Provide a way to generate a string guaranteed to be unique when compared
 * to other strings generated by this function.
 */

module.exports= function(){
  var guid = 'xxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function(c) {
    var d = new Date().getTime();
    var r = (d + Math.random()*36)%36 | 0;
    return (c=='x' ? r : (r&0x3|0x8)).toString(36);
  });
  //console.log("this is a guid %s",guid);
  return guid
};
