
function creatStack() {
  const items = new WeakMap()
  class _Stack{
    constructor(){
      items.set(this, [])
    }
    push (e) {
      let _items = items.get(this)
      _items.push(e)
    }
    pop () {
      let _items = items.get(this)
      return _items.pop()
    }
    size () {
      let _items = items.get(this)
      return _items.length
    }
    isEmpty () {
      let _items = items.get(this)
      return _items.length === 0
    }
    peek () {
      let _items = items.get(this)
      return _items[_items.length -1]
    }
    clear () {
      let _items = items.get(this)
      _items = []
    }
  }
  return _Stack
}

module.exports = creatStack