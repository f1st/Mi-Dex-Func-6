import { ethers } from 'ethers';
import MultiSigWallet from './contracts/MultiSigWallet.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const multiSigWallet = new ethers.Contract(MultiSigWallet.address, MultiSigWallet.abi, signer);

async function submitTransaction(destination, value) {
  const tx = await multiSigWallet.submitTransaction(destination, value);
  await tx.wait();
  return tx.hash;
}
