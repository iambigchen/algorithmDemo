const Stack = require('./stack')()

let count = 0

function towerOfHanoi(num, from, to, helper) {
  if (num > 0) {
    towerOfHanoi(num -1, from, helper, to)
    count++
    console.log('第' + count + '步: ' + from.peek() + '号盘子: ' + from.name + '---->' + to.name);
    to.push(from.pop())
    towerOfHanoi(num -1, helper, to, from)
  }
}

var source = new Stack(),
dest = new Stack(),
help = new Stack()

source.name = 'A';
dest.name = 'C';
help.name = 'B';

const name = 3
for(var i =  name; i > 0; i--) {
  source.push(i)
}

towerOfHanoi(name, source, dest, help)