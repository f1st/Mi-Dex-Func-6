import WalletConnectProvider from '@walletconnect/web3-provider';

const provider = new WalletConnectProvider({
  rpc: { 1: 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY' },
  chainId: 1,
});
provider.enable();
