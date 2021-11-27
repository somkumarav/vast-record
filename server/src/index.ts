import Express from 'express';
import { createConnection } from 'typeorm';
import { register } from './routes/Register';

const app = Express();
const main = async () => {
  createConnection();
  app.use(Express.json());
  app.use(register);

  app.get('/', (_, res) => {
    res.json({ fasdkl: 'hello' });
  });

  app.listen(4000, () => {
    console.log(`server started at http://localhost:4000`);
  });
};
main();
