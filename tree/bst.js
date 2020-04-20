function BinarySearchTree () {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  var root = null

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  // 中序遍历
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  var preOrderTraverseNode = function (callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }
  // 先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }

  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }

  var minNode = function (node) {
    if (node !== null) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }
  this.min = function () {
    return minNode(root)
  }

  var maxNode = function (node) {
    if (node !== null) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }
  this.max = function () {
    return maxNode(root)
  }

  var searchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if (node.key < key) {
      return searchNode(node.right, key)
    } else if (node.key > key) {
      return searchNode(node.left, key)
    } else {
      return true
    }
  }
  this.search = function (key) {
    return searchNode(root, key)
  }

  var findMinNode = function (node) {
    while(node && node.left !== null) {
      node = node.left
    }
    return node
  }
  var removeNode = function (node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key){
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key){
      node.right= removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }
  this.remove = function (key) {
    root = removeNode(root, key)
  }
}