async function getTradeHistory(pair) {
    const history = await dexContract.getTradeHistory(pair);
    return history;
  }
  
  async function getWalletBalance(token) {
    const balance = await dexContract.getWalletBalance(token);
    return balance;
  }
  