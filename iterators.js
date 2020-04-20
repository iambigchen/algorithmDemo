function *A() {
  // yield 1
  // yield 11
  // yield 111
  // yield 1111
  // yield 11111
  // yield* '12345'
}
const a = A()

console.log(a.next())
console.log(a.next())

// var A = {
//   *[Symbol.iterator]() {
//     yield 1
//     yield 11
//     yield 111
//   }
// }

// for (const iterator of A) {
//   console.log(iterator)
// }