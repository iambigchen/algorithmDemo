// 更好的散列函数 减少冲突
function HashMap() {
  var table = []
  var djb2HashCode = function (key) {
    var hash = 5381
    for(var i = 0; i < key.length; i++) {
      hash = hash*33 + key.charCodeAt[i]
    }
    return hash % 1013
  }
  this.put = function (key, value) {
    const position = djb2HashCode(key)
    console.log('key', position, value)
    table[position] = value
  }
  this.get = function (key) {
    const position = djb2HashCode(key)
    return table[position]
  }
  this.remove = function (key) {
    const position = djb2HashCode(key)
    table[position] = undefined
  }
}