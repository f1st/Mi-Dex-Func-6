import { ethers } from 'ethers';
import DAOContract from './contracts/DAOContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const daoContract = new ethers.Contract(DAOContract.address, DAOContract.abi, signer);

async function voteOnProposal(proposalId, support) {
  const tx = await daoContract.vote(proposalId, support);
  await tx.wait();
  return tx.hash;
}
