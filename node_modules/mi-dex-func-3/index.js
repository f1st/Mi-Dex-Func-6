async function createOrder(pair, side, price, amount) {
    const tx = await dexContract.createOrder(pair, side, price, amount);
    await tx.wait();
    return tx.hash;
  }
  
  async function executeOrder(orderId) {
    const tx = await dexContract.executeOrder(orderId);
    await tx.wait();
    return tx.hash;
  }
  