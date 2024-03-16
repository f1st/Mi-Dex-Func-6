import { ethers } from 'ethers';
import VotingContract from './contracts/VotingContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const votingContract = new ethers.Contract(VotingContract.address, VotingContract.abi, signer);

async function vote(candidateId) {
  const tx = await votingContract.vote(candidateId);
  await tx.wait();
  return tx.hash;
}
