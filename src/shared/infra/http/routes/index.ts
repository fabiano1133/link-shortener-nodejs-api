import { Router } from 'express';
import linkRouter from '@modules/links/infra/controllers/http/routes';

const routes = Router();

routes.use('/', linkRouter);

export default routes;
