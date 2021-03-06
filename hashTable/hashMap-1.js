// 分离链接方法 解决冲突
const LinkedList = require('../link/linkedList')
function HashMap() {
  var table = []
  var loseloseCode = function (key) {
    var hash = 0
    for(var i = 0; i < key.length; i++) {
      hash += key.charCodeAt[i]
    }
    return hash % 37
  }
  var ValuePair = function (key, value) {
    this.key = key
    this.value = value
  }
  this.put = function (key, value) {
    const position = loseloseCode(key)
    if (table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }
  this.get = function (key) {
    const position = loseloseCode(key)
    if (table[position] !== undefined) {
      let current = table[position].getHead()
      while(current.next) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if (current.element.key === key){ //{9}
        return current.element.value
      }
    }
    return undefined
  }
  this.remove = function (key) {
    const position = loseloseCode(key)
    if (table[position] !== undefined) {
      let current = table[position].getHead()
      while(current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element)
          if (table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if (current.element.key === key) {
        table[position].remove(current.element)
        if (table[position].isEmpty()) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }
}