
function creatQueue() {
  const items = new WeakMap()
  class _Queue{
    constructor(){
      items.set(this, [])
    }
    enqueue (e) {
      let _items = items.get(this)
      _items.push(e)
    }
    dequeue () {
      let _items = items.get(this)
      return _items.shift()
    }
    size () {
      let _items = items.get(this)
      return _items.length
    }
    isEmpty () {
      let _items = items.get(this)
      return _items.length === 0
    }
    front () {
      let _items = items.get(this)
      return _items[0]
    }
    clear () {
      let _items = items.get(this)
      _items = []
    }
  }
  return _Queue
}

module.exports = creatQueue