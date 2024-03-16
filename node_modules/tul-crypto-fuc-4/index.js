import { ethers } from 'ethers';
import StakingContract from './contracts/StakingContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const stakingContract = new ethers.Contract(StakingContract.address, StakingContract.abi, signer);

async function stakeTokens(amount) {
  const tx = await stakingContract.stakeTokens(ethers.utils.parseEther(amount.toString()));
  await tx.wait();
  return tx.hash;
}
