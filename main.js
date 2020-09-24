function fizzy(num) {
  a = 'Fizz';
  b = 'Buzz';
  c = "FizzBuzz";
  if ( num % 3 === 0 && num % 5 === 0 ) {
    return 'Fizz' + 'Buzz';
  } else if ( num % 3 === 0 ) {
    return 'Fizz';
  } else if ( num % 5 === 0 ) {
    return 'Buzz';
  } else {
    return num;
  }
}
console.log(fizzy(15));




module.exports = {
  fizzy,
}