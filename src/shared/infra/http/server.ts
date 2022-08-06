import express from 'express';
import cors from 'cors';
import routes from './routes';
import { run } from '../database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(run);

app.listen(3333, () => console.log(`Server is Running`));
