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
