export function fizzBuzz(num) {
  //if divisible by both 3 and 5 return FizzBuzz
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  //if divisible by 3 return Fizz
  else if (num % 3 === 0) {
    return "Fizz";
  }
  //if divisible by 5 return Buzz
  else if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
}
