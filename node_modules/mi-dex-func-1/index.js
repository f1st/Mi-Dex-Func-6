import { ethers } from 'ethers';
import DexContract from './contracts/DexContract.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const dexContract = new ethers.Contract(DexContract.address, DexContract.abi, signer);
