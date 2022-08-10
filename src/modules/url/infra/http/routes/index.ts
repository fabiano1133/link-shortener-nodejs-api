import { Router } from 'express';

import { urlBodyValidation } from '@config/validation/url-validation.config';
import { CreateShortenerUrlController } from '../controllers/CreateShortenerUrlController';
import { DeleteShortenerUrlController } from '../controllers/DeleteShortenerUrlController';
import { GetShortenerUrlController } from '../controllers/GetShortenerUrlController';
import { UpdateIsActiveShortenerUrlController } from '../controllers/UpdateIsActiveShortenerUrlController';
import { ReCreateShortendUrlController } from '../controllers/ReCreateShortendUrlController';
import { UpdateShortenerUrlController } from '../controllers/UpdateShortenerUrlController';

const urlRouter = Router();

const createShortenerUrlController = new CreateShortenerUrlController();
const deleteShortenerUrlController = new DeleteShortenerUrlController();
const getShortenerUrlController = new GetShortenerUrlController();
const updateIsActiveShortenerUrlController = new UpdateIsActiveShortenerUrlController();
const reCreateShortendUrlController = new ReCreateShortendUrlController();
const updateShortenerUrlController = new UpdateShortenerUrlController();

urlRouter.post('/createurl', urlBodyValidation, createShortenerUrlController.handle);
urlRouter.get('/:hash', getShortenerUrlController.handle);
urlRouter.put('/update/:hash', updateShortenerUrlController.handle);
urlRouter.delete('/delete/:hash', deleteShortenerUrlController.handle);
urlRouter.put('/status/:id', updateIsActiveShortenerUrlController.handle);
urlRouter.post('/recreateurl', reCreateShortendUrlController.handle);

export default urlRouter;
