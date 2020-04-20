function HashMap() {
  var table = []
  var loseloseCode = function (key) {
    var hash = 0
    for(var i = 0; i < key.length; i++) {
      hash += key.charCodeAt[i]
    }
    return hash % 37
  }
  this.put = function (key, value) {
    const position = loseloseCode(key)
    console.log('key', position, value)
    table[position] = value
  }
  this.get = function (key) {
    const position = loseloseCode(key)
    return table[position]
  }
  this.remove = function (key) {
    const position = loseloseCode(key)
    table[position] = undefined
  }
}