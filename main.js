function fizzy(num) {
  // let x = num % 3;
  x = num % 3 === 0;
  y = num % 5 === 0;
  z = x === y;
  a = 'Fizz';
  b = 'Buzz';
  c = "FizzBuzz";
  if ( x && y ) {
    return a + b;
  } else if ( x ) {
    return a;
  } else if ( y ) {
    return b;
  } else {
    return num;
  }
}
console.log(fizzy(3));




module.exports = {
  fizzy,
}