async function checkWalletBalance(walletAddress) {
    const balance = await web3.eth.getBalance(walletAddress);
    return web3.utils.fromWei(balance, 'ether');
  }
  