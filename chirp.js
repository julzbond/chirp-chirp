module.exports = chirp;

function chirp(n){
  if (typeof n !== 'number'){
    console.log("must pass a number through the function");
    return null;
  }

  if (n <= 0) {
    console.log("must pass a positive integer through the function");
    return null;
  }

  var chirpArr = [];
  return chirping(n);

  function chirping(n){
    if(n > 0){
      chirpArr.push("chirp");
      n--;
      return chirping(n);
    }
    return chirpArr.join(" ");
  }
}