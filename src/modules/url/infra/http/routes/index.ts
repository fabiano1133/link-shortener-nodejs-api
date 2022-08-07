import { Router } from 'express';
import { CreateLinkController } from '@modules/url/infra/http/controllers/CreateLinkController';

const urlRouter = Router();

const createLinkController = new CreateLinkController();

urlRouter.post('/createlink', createLinkController.handle);

export default urlRouter;
