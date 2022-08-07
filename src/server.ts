import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import '@shared/infra/database';
import '@shared/containers';

import routes from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log(`Server is Running`));
