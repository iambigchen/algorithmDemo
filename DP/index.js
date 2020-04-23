// 动态规划(Dynamic Programming，DP)是一种将复杂问题分解成更小的子问题来解决的优化技术。

//动态规划解决问题时，要遵循三个重要步骤:
// (1) 定义子问题;
// (2) 实现要反复执行来解决子问题的部分;
// (3) 识别并求解出边界条件。

// 找零问题
function MinCoinChange(coins) {
  var cache = {}

  this.makeChange = function(amount) {
    var me = this
    if (!amount) {
      return []
    }
    if (cache[amount]) {
      return cache[amount];
    }
    var min = [], newMin, newAmount;
    for (var i=0; i<coins.length; i++){
      const coin = coins[i]
      newAmount = amount - coin
      if (newAmount >= 0){
        newMin = me.makeChange(newAmount);
      }
      if (newAmount >= 0 && (newMin.length < min.length-1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin)
      }
    }
    return (cache[amount] = min)
  }
}

const minCoin = new MinCoinChange([1,2,5,10,20,50,100])

console.log(minCoin.makeChange(53))

// 背包问题
function knapSack(capacity, weights, values, n) {
  var i, w, a, b, kS = []
  for (i = 0; i <= n; i++) {
    kS[i] = [];
  }
  for(i = 0; i <= n; i++) {
    for(w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) {
        kS[i][w] = 0;
      } else if (w >= weights[i -1]) {
        a = kS[i-1][w]
        b = values[i-1] + kS[i-1][w-weights[i-1]]
        kS[i][w] = (a > b) ? a : b
      } else {
        kS[i][w] = kS[i-1][w]
      }
    }
  }
  function findValues() {
    var i = n, k = capacity
    while (i > 0 && k > 0) {
      if (kS[i][k] !== kS[i-1][k]) {
      console.log('物品' + i + '，重量:' + weights[i-1] + '，价值:' + values[i-1]); i--;
      k = k - kS[i][k];
      } else { i--;
      } 
    }
  }
  findValues()
  return kS[n][capacity]
}
var values = [3, 4, 5],
      weights = [2, 3, 4],
      capacity = 5,
      n = values.length;
console.log(knapSack(capacity, weights, values, n))

// 最长公共子序列
function lcs(wordX, wordY) {
  var m = wordX.length,
      n = wordY.length,
      l = [],
      i, j, a, b;
  for (i = 0; i <= m; ++i) {
    l[i] = []
    for (j = 0; j <= n; ++j) {
      l[i][j] = 0;
    }
  }
  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        l[i][j] = 0;
      } else if (wordX[i-1] == wordY[j-1]) {
        l[i][j] = l[i-1][j-1] + 1;
      } else {
        a = l[i-1][j];
        b = l[i][j-1];
        l[i][j] = (a > b) ? a : b
      }
    }
  }
  function printSolution() {
    var a = wordX.length, b = wordY.length, i, j,result = []
    while(b > 0 && a > 0) {
      if (l[a-1][b] !== l[a][b] && l[a][b-1] !== l[a][b]) {
        result.unshift(wordX[a-1])
        b--
        a--
      } else if (l[a-1][b] === l[a][b] && l[a][b-1] !== l[a][b]){
        a--
      } else if (l[a][b-1] === l[a][b] && l[a-1][b] === l[a][b]){
        b--
      } else {
        a--
        b--
      }
    }
    console.log('answer', result.join(''))
  }
  printSolution()
  return l[m][n]
}
console.log(lcs('abcadf', 'acbad'))