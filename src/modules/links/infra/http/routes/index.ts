import { Router } from 'express';
import { CreateLinkController } from '../controllers/CreateLinkController';
import { ListLinkController } from '../controllers/ListLinkController';
import { ShowLinkController } from '../controllers/ShowLinkController';
import { UpdateLinkController } from '../controllers/UpdateLinkController';

const linkRouter = Router();

const createLinkController = new CreateLinkController();
const listLinkController = new ListLinkController();
const showLinkController = new ShowLinkController();
const updateLinkController = new UpdateLinkController();

linkRouter.post('/createlink', createLinkController.handle);
linkRouter.get('/list', listLinkController.handle);
linkRouter.get('/show/:id', showLinkController.handle);
linkRouter.put('/update/:id', updateLinkController.handle);

export default linkRouter;
