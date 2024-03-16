async function getMarketPairs() {
    const pairs = await dexContract.getMarketPairs();
    return pairs;
  }
  
  async function getMarketInfo(pair) {
    const info = await dexContract.getMarketInfo(pair);
    return info;
  }
  