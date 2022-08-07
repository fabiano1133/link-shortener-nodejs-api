import express from 'express';
import cors from 'cors';

import { run } from '@shared/infra/database';
import routes from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(run);

app.listen(3333, () => console.log(`Server is Running`));
