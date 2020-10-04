import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;

async function main() {
  try {
    await app.prepare();
    const server = express();

    server.listen(port, () => console.log('Hello Next Server'));
  } catch (error) {
    console.log('Server listening ...NO');
  }
}

main();