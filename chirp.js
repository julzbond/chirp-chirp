module.exports = chirp;

var chirping = [];

function chirp(n){
  if (typeof n !== 'number'){
    return "must pass a number through the second parameter";
  }
  if(n > 0){
    chirping.push("chirp");
    n--;
    return chirp(n);
  }
  return chirping.join(" ");
}