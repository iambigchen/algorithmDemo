// array
const array = [1,2,3,4,5]

for (const iterator of array) {
  console.log(iterator)
}

// string
const string = '12345'

for (const iterator of string) {
  console.log(iterator)
}

// set
const set = new Set([1,2,3,4,5])
for (const iterator of set) {
  console.log(iterator)
}

// map
const map = new Map([
  [1,1],
  [2,2],
  [3,3],
  [4,4],
  [5,5]
])
for (const iterator of map) {
  console.log(iterator)
}

// arguments

function arg() {
  for (const iterator of arguments) {
    console.log(iterator)
  }
}
arg(1,2,3,4,5)