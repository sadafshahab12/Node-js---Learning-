const runtime = () => {
  // console.log(x); //reference  error because x is nopt defined
  let num = 98;
  num();
  // num()
  // TypeError: num is not a function
};
module.exports = runtime;
