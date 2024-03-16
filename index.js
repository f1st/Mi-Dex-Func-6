async function depositToken(token, amount) {
    const tx = await dexContract.depositToken(token, amount);
    await tx.wait();
    return tx.hash;
  }
  
  async function withdrawToken(token, amount) {
    const tx = await dexContract.withdrawToken(token, amount);
    await tx.wait();
    return tx.hash;
  }
  