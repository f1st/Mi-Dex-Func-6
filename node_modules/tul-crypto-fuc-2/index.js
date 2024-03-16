import IPFS from 'ipfs-core';

const ipfs = await IPFS.create();
const file = await ipfs.add('Hello, world!');
console.log('File CID:', file.cid.toString());
