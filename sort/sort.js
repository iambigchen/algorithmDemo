const { performance } = require('perf_hooks')
function ArrayList(){
  var array = []
  this.insert = function(item){
    array.push(item)
  }
  this.toString= function(){
    return array.join()
  }

  var swap = function (index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }
  // 冒泡排序 复杂度为O(n2)
  this.bubbleSort = function () {
    var len = array.length
    for(var i = 0; i < len;  i++) {
      for(var j = 0; j < len -1 -i;  j++) {
        if (array[j+1] < array[j]) {
          swap(j, j+1)
        }
      }
    }
  }

  //选择排序 复杂度为O(n2)
  this.selectionSort = function () {
    var len = array.length,
    indexMin
    for(var i = 0; i < len - 1;  i++) {
      indexMin = i
      for(var j = i + 1; j < len ;  j++) {
        if (array[j] < array[indexMin]) {
          indexMin = j
        }
      }
      if (i !== indexMin){
        swap(i, indexMin);
      }
    }
  }

  // 插入排序
  this.insertionSort = function () {
    var len = array.length, j, temp
    for(var i = 1; i < len;  i++) {
      temp = array[i]
      j = i
      while(j > 0 && temp < array[j - 1]) {
        array[j] = array[j-1]
        j--
      }
      array[j] = temp
    }
  }

  //JavaScript的Array类定义了一个sort函数(Array.prototype.sort)用 以排序JavaScript数组(我们不必自己实现这个算法)。ECMAScript没有定义用哪 个排序算法，所以浏览器厂商可以自行去实现算法。
  //例如，Mozilla Firefox使用 归并排序作为Array.prototype.sort的实现，而Chrome使用了一个快速排序
  var merge = function (left, right) {
    var result = [], ir = 0, il = 0
    while(ir < right.length && il < left.length) {
      if (right[ir] < left[il]) {
        result.push(right[ir++])
      } else {
        result.push(left[il++])
      }
    }
    while(il < left.length) {
      result.push(left[il++])
    }
    while(ir < right.length) {
      result.push(right[ir++])
    }
    return result
  }

  var mergeSortRec = function (list) {
    var length = list.length;
    if(length === 1) {
      return list
    }
    var mid = Math.floor(length / 2),
      left = list.slice(0, mid),
      right = list.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
  }
  // 归并排序 O(nlog^n)
  this.mergeSort = function () {
    array = mergeSortRec(array)
  }

  var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)], i = left, j = right
    while(i <= j) {
      while (array[i] < pivot) {  //{12}
        i++; 
      }
      while (array[j] > pivot) {  //{13}
        j--;
      }
      if (i <= j) {
        swap(i, j)
        i++
        j--
      }
    }
    return i
  }
  var quick = function (arr, left, right) {
    var index
    if (arr.length > 1) {
      index = partition(arr, left, right)
      if (left < index -1) {
        quick(array, left, index - 1)
      }
      if (right > index) {
        quick(array, index, right)
      }
    }
  }
  // 快速排序 O(nlog^n)
  this.quickSort = function () {
    quick(array,  0, array.length - 1)
  }

  // sort api
  this.sort = function () {
    array.sort((a, b) => {
      return a - b
    })
  }

  var heapify = function (arr, heapSize, i) {
    var left = i * 2 + 1,
        right = i * 2 + 2,
        largest = i
    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      swap(i, largest);
      heapify(arr, heapSize, largest);
    }
  }
  var buildHeap = function (arr) {
    var heapSize = arr.length;
    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
      heapify(arr, heapSize, i);
    }
  }
  //堆排序
  this.heapSort = function () {
    var heapSize = array.length
    buildHeap(array)
    while (heapSize > 1) {
      heapSize--;
      swap(0, heapSize);
      heapify(array, heapSize, 0);
    }
  }
}
let num = 1000
let startTime, endTime
let arr = new ArrayList()
for (let index = num; index > 0; index--) {
  arr.insert(index)
}
startTime = performance.now()
arr.bubbleSort()
endTime = performance.now()
console.log('bubbleSort time=', endTime - startTime)

let arr2 = new ArrayList()
for (let index = num; index > 0; index--) {
  arr2.insert(index)
}
startTime = performance.now()
arr2.selectionSort()
endTime = performance.now()
console.log('selectionSort time=', endTime - startTime)

let arr3 = new ArrayList()
for (let index = num; index > 0; index--) {
  arr3.insert(index)
}
startTime = performance.now()
arr3.insertionSort()
endTime = performance.now()
console.log('insertionSort time=', endTime - startTime)

let arr4 = new ArrayList()
for (let index = num; index > 0; index--) {
  arr4.insert(index)
}
startTime = performance.now()
arr4.mergeSort()
endTime = performance.now()
console.log('mergeSort time=', endTime - startTime)

let arr5 = new ArrayList()
for (let index = num; index > 0; index--) {
  arr5.insert(index)
}
startTime = performance.now()
arr5.quickSort()
endTime = performance.now()
console.log('quickSort time=', endTime - startTime)

let arr6 = new ArrayList()
for (let index = num; index > 0; index--) {
  arr6.insert(index)
}
startTime = performance.now()
arr6.sort()
endTime = performance.now()
console.log('sort time=', endTime - startTime)

let arr7 = new ArrayList()
let list = [3,7,1,5,8,2,9]
list.forEach(e => {
  arr7.insert(e)
})
// for (let index = num; index > 0; index--) {
//   arr7.insert(index)
// }
startTime = performance.now()
arr7.heapSort()
endTime = performance.now()
console.log('heapSort time=', endTime - startTime)