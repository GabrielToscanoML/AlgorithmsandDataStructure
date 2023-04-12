const hashMap = {
  sum: arr => arr.reduce((a, b) => a + b),
  sub: arr => arr.reduce((a, b) => a - b),
  mult: arr => arr.reduce((a, b) => a * b),
  div: (a, b) => (b === 0 ? 'Division must not allow 0 dividend!' : a / b ),
}

console.log(hashMap.sum([1, 2, 3, 4])); // 10
console.log(hashMap.sub([10, 1, 0, 4])); // 5
console.log(hashMap.mult([10, 1, 0, 4])); // 0
console.log(hashMap.div(4,2)); // 2
console.log(hashMap.div(4,0)); // Error