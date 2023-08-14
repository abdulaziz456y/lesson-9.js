let numbers = [ 1, -4, 12, 0, -3, 29, -150];

let newNumbers = numbers.filter((el) => {
  if (el >= 0) {
    return true;
  } else {
    return false;
  }
})

console.log(newNumbers);