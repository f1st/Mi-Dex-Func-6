import { ethers } from 'ethers';
import ChainlinkBridge from './contracts/ChainlinkBridge.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const chainlinkBridge = new ethers.Contract(ChainlinkBridge.address, ChainlinkBridge.abi, signer);

async function transferTokensToEthereum(amount, destinationAddress) {
  const tx = await chainlinkBridge.transferToEthereum(amount, destinationAddress);
  await tx.wait();
  return tx.hash;
}
