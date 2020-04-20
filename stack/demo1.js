const Stack = require('./stack')()
const stack = new Stack()
function baseConverter(decNumber) {
  let rem, str = ''
  while(decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
    stack.push(rem)
  }
  while(!stack.isEmpty()) {
    str += stack.pop().toString()
  }
  console.log(str)
}
baseConverter(23)