import express, { Application } from 'express';
import next from 'next';
import router from './router/router';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;

async function main(): Promise<void> {
  try {
    await app.prepare();
    const server: Application = express();
    server.use(router);
    server.listen(port, () => console.log('Hello Next Server'));
  } catch (error) {
    console.log('Server listening ...NO');
  }
}

main();