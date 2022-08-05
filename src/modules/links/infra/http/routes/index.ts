import { Router } from 'express';
import { CreateLinkController } from '../controllers/CreateLinkController';
import { ListLinkController } from '../../ListLinkController';

const linkRouter = Router();

const createLinkController = new CreateLinkController();
const listLinkController = new ListLinkController();

linkRouter.post('/createlink', createLinkController.handle);
linkRouter.get('/list', listLinkController.handle);

export default linkRouter;
