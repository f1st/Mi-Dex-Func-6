import axios from 'axios';

async function getTransactionInfo(txHash) {
  const response = await axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${txHash}&apikey=YOUR_API_KEY`);
  return response.data.result;
}
