async function calculateProfit(orderId) {
    const profit = await dexContract.calculateProfit(orderId);
    return profit;
  }
  
  async function getPriceDifference(pair) {
    const difference = await dexContract.getPriceDifference(pair);
    return difference;
  }
  