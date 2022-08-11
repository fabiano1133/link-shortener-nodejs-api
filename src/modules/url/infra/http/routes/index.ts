import { Router } from 'express';

import { urlBodyValidation } from '@config/validation/url-validation.config';
import { CreateShortenerUrlController } from '../controllers/CreateShortenerUrlController';
import { DeleteShortenerUrlController } from '../controllers/DeleteShortenerUrlController';
import { GetShortenerUrlController } from '../controllers/GetShortenerUrlController';
import { UpdateIsActiveShortenerUrlController } from '../controllers/UpdateIsActiveShortenerUrlController';
import { ReCreateShortendUrlController } from '../controllers/ReCreateShortendUrlController';
import { UpdateShortenerUrlController } from '../controllers/UpdateShortenerUrlController';
import { ReCreateExpiredShortenedUrlController } from '../controllers/ReCreateExpiredShortenedUrlController';

const urlRouter = Router();

const createShortenerUrlController = new CreateShortenerUrlController();
const deleteShortenerUrlController = new DeleteShortenerUrlController();
const getShortenerUrlController = new GetShortenerUrlController();
const updateIsActiveShortenerUrlController = new UpdateIsActiveShortenerUrlController();
const reCreateShortendUrlController = new ReCreateShortendUrlController();
const updateShortenerUrlController = new UpdateShortenerUrlController();
const reCreateExpiredShortenedUrlController = new ReCreateExpiredShortenedUrlController();

urlRouter.post(
    '/createurl',
    /*    #swagger.parameters['obj'] = {
  in: 'body',
  description: 'Create a new shortener url',
  schema: {
      $url: '',
  }
} */ urlBodyValidation,
    createShortenerUrlController.handle
);
urlRouter.get('/:shortenerUrl', getShortenerUrlController.handle);
urlRouter.put('/update/:hash', updateShortenerUrlController.handle);
urlRouter.delete('/delete/:hash', deleteShortenerUrlController.handle);
urlRouter.put('/status/:id', updateIsActiveShortenerUrlController.handle);
urlRouter.post(
    '/retrycreateshortenedurl/:hash',
    /*    #swagger.parameters['url'] = {
  in: 'body',
  description: 'Recreate a already shortener url',
  schema: {
      $url: '',
  }
} */ reCreateShortendUrlController.handle
);
urlRouter.post(
    '/recreateexpiredshortenedurl',
    reCreateExpiredShortenedUrlController.handle
);

export default urlRouter;
