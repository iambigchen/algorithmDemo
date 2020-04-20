function DoublyLinkedList (){
  function Node(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
  let length = 0, head = null, tail = null

  this.append = function (element) {
    let node = new Node(element)
    if (length === 0) {
      head = node
    } else {
      let current = head
      while(current.next) {
        current = current
      }
      current.next = node
      node.prev = current
      tail = node
    }
    tail = node
    length++
  }

  this.insert = function (position, element) {
    if (position > -1 && position < length) {
      let node = new Node(element)
      if (position === 0) {
        if (!head) {
          head = node
          tail = node
        } else {
          node.next = head
          head.prev = node
          head = node
        }
      } else if (position === length - 1) {
        node.prev = tail
        tail.next = node
        tail = node
      } else {
        // 优化 判断位置，决定由前往后还是由后往前
        if (position > length / 2) {
          let num = length, current = tail, next
          while(num-- > position) {
            next = current
            current = current.prev
          }
          next.prev = node
          node.next = next
          current.next = node
          node.prev = current
        } else {
          let num = 0, current = head, previous
          while(num++ < position) {
            previous = current
            current = current.next
          }
          previous.next = node
          node.prev = previous
          node.next = current
          current.prev = node
        }
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    if (position > -1 && position < length){
      let current = head
      if (position === 0) {
        head = current.next
        if (length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length) {
        current = tail.prev
        current.next = null
        tail = current
      } else {
        // 优化 判断位置，决定由前往后还是由后往前
        if (position > length / 2) {
          let num = length, next
          while(num-- > position) {
            next = current
            current = current.prev
          }
          current.prev.next = next
          next.prev = current.prev
        } else {
          let num = 0, previous
          while(num++ < position) {
            previous = current
            current = current.next
          }
          previous.next = current.next
          current.next.prev = previous
        }
      }
      length--
      return current.element
    } else {
      return null
    }
  }
}