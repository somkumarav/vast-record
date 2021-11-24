import Express from 'express';
import { createConnection } from 'typeorm';

const app = Express();
const main = async () => {
  createConnection();
  app.use(Express.json());
  app.get('/', (_, res) => {
    res.send('helo');
  });

  app.listen(4000, () => {
    console.log(`server started at http://localhost:4000`);
  });
};
main();
