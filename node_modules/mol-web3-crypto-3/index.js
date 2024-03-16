import { Connect } from '@toruslabs/torus-embed';
const torus = new Torus();
await torus.init();
await torus.login();
const userInfo = torus.getUserInfo();
