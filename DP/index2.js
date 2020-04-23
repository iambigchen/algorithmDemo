// 贪心算法 近似解决方案，但不一定是最优方案

// 找零问题
function MinCoinChange(coins) {
  this.makeChange = function(amount) {
    var change = [], total = 0
    for (var i=coins.length; i>=0; i--){
      if (total + coins[i] <= amount) {
        change.push(coins[i])
        total += coins[i]
      }
    }
    return change
  }
}
const minCoin = new MinCoinChange([1,2,5,10,20,50,100])

console.log(minCoin.makeChange(53))

// 分数背包
function knapSack(capacity, values, weights, n) {
  var load = 0, i = 0, val = 0;
  for (i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= (capacity - load)) {
      val += values[i];
      load += weights[i];
    } else {
      var r = (capacity - load) / weights[i];
      val += r * values[i]
      load += weights[i];
    }
  }
  return val
}
var values = [3, 4, 5],
      weights = [2, 3, 4],
      capacity = 5,
      n = values.length;
console.log(knapSack(capacity, weights, values, n))