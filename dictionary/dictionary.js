function Dictionary() {
  var items = {}
  this.has = function (key) {
    return key in items
  }
  this.set = function (key, vaule) {
    items[key] = vaule
  }
  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  this.get = function (key) {
    return this.has[key] ? items[key] : undefined
  }
  this.values = function () {
    let arr = []
    for (const key in items) {
      if (object.hasOwnProperty(key)) {
        const element = items[key];
        arr.push(element)
      }
    }
    return arr
  }
  this.clear = function () {
    items = []
  }
  this.size = function () {
    return Object.keys(items).length
  }
  this.keys = function () {
    return Object.keys(items)
  }
}