import linkRouter from '../../../../modules/links/infra/http/routes';
import { Router } from 'express';

const routes = Router();

routes.use('/', linkRouter);

export default routes;
