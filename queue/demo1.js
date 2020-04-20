const Queue = require('./queue')()
const queue = new Queue()

function hotPotato(nameList, num) {
  nameList.forEach(name => {
    queue.enqueue(name)
  })
  while(queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      queue.enqueue(queue.dequeue())
    }
    const outName = queue.dequeue()
    console.log(outName, 'is out')
  }
  return queue.dequeue()
}

let names = ['John','Jack','Camila','Ingrid','Carl'];
let winner = hotPotato(names, 5);
console.log('The winner is: ' + winner)