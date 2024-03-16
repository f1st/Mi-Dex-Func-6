import { ethers } from 'ethers';
import UniswapRouter from './contracts/UniswapRouter.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const uniswapRouter = new ethers.Contract(UniswapRouter.address, UniswapRouter.abi, signer);

async function swapTokens(tokenIn, amountIn, tokenOut) {
  const tx = await uniswapRouter.swapExactTokensForTokens(amountIn, tokenIn, [tokenIn, tokenOut], signer.address, Date.now() + 1000 * 60 * 10);
  await tx.wait();
  return tx.hash;
}
