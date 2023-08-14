function fakrorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * fakrorial(n - 1)
}

let res = fakrorial(1, 2, 3, 4, 5);

console.log(res);
