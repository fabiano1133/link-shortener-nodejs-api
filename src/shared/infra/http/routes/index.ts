import urlRouter from '@modules/url/infra/http/routes';
import { Router } from 'express';

const routes = Router();

routes.use('/', urlRouter);

export default routes;
