function LinkedList () {
  let Node = function (element) {
    this.element = element
    this.next = null
  }
  let length = 0;
  let head = null;
  this.append = function (element) {
    let node = new Node(element), current
    if (head === null) {
      head = node
    } else {
      current = head;
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head, num = 0, previous
      if (position === 0){
        head = current.next;
      } else {
        while(num++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.insert = function (position, element) {
    if (position >= 0 && position <= length){
      let node = new Node(element)
      let current, num = 0, previous
      if (position === 0) {
        node.next = head
        head = node
      } else {
        while(num++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
        length++
      }
      return true
    } else {
      return false
    }
  }

  this.toString = function () {
    let current = head
    let string = ''
    while(current) {
      string += current.element + (current.next ? 'n' : '')
      current = current.next
    }
    return string
  }

  this.indexOf = function (element) {
    let current = head, num = -1
    while(current) {
      num++
      if (element === current.element) {
        break
      }
      current = current.next
    }
    return num
  }

  this.remove = function (element) {
    const position = this.indexOf(element)
    return this.removeAt(position)
  }
  this.isEmpty = function () {
    return length === 0;
  }
  this.size = function () {
    return length;
  }
  this.getHead = function () {
    return head
  }
}

module.exports = LinkedList