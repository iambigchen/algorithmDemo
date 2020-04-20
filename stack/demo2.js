const Stack = require('./stack')()
const stack = new Stack()

var match = function(open, close) {
  var opens = '([{',
      closes = ')]}';

  return opens.indexOf(open) === closes.indexOf(close);
}
function parenthesesChecker(symbols) {
  const length = symbols.length
  let len = 0, symbol, flag = true

  while(len < length) {
    symbol = symbols[len]
    len++
    if (symbol === '(' || symbol === '{' || symbol === '[') {
      stack.push(symbol)
      continue
    }
    if (symbol === ')' || symbol === '}' || symbol === ']') {
      flag = match(stack.pop(), symbol)
    }
    if (!flag) {
      break
    }
  }
  console.log(flag)
  return flag
}

parenthesesChecker(')({[]}))')