import { ethers } from 'ethers';
import NFTokenContract from './contracts/NFTokenContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const nftContract = new ethers.Contract(NFTokenContract.address, NFTokenContract.abi, signer);

async function mintNFT(tokenURI) {
  const tx = await nftContract.mint(signer.address, tokenURI);
  await tx.wait();
  return tx.hash;
}
