// 线性探查 解决冲突
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
      table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while(table[position] !== undefined) {
        index++
      }
      table[index] = new ValuePair(key, value)
    }
  }
  this.get = function (key) {
    const position = loseloseCode(key)
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value
      } else {
        let index = ++position
        while(table[index].key !== key) {
          index++
        }
        return table[index].value
      }
    } 
    return undefined
  }
  this.remove = function (key) {
    const position = loseloseCode(key)
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined
        return true
      } else {
        let index = ++position
        while(table[index].key !== key) {
          index++
        }
        table[index] = undefined
        return true
      }
    } 
    return false
  }
}