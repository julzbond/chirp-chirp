module.exports = chirp;

var chirpArr = [];

function chirp(n){
  if (typeof n !== 'number'){
    console.log("must pass a number through the function");
    return null;
  }

  if (n <= 0) {
    console.log("must pass a positive number through the function");
    return null;
  }

  if (n !== parseInt(n)){
    console.log("must pass an integer through the function");
    return null;
  }

  if(n > 0){
    chirpArr.push("chirp");
    n--;
    if (n === 0){
      return chirpArr.join(" ");
    }
    return chirp(n);
  }
}
