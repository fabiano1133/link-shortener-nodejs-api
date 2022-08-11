import urlRouter from '@modules/url/infra/http/routes';
import { Router } from 'express';

const routes = Router();

routes.use('/v1', urlRouter);

export default routes;
