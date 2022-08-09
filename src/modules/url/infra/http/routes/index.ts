import { Router } from 'express';
import { CreateLinkController } from '@modules/url/infra/http/controllers/CreateLinkController';
import { GetUrlController } from '../controllers/GetUrlController';
import { urlBodyValidation } from '@config/validation/url-validation.config';
import { NotUpdateLinkController } from '../controllers/NotUpdateLinkController';
import { NotDeleteLinkController } from '../controllers/NotDeleteLinkController';
import { UpdateIsActiveLinkController } from '../controllers/UpdateIsActiveLinkController';
import { RetryShortenLinkController } from '../controllers/RetryShortenLinkController';

const urlRouter = Router();

const createLinkController = new CreateLinkController();
const getUrlShortenerController = new GetUrlController();
const notUpdateLinkController = new NotUpdateLinkController();
const notDeleteLinkController = new NotDeleteLinkController();
const updateIsActiveLinkController = new UpdateIsActiveLinkController();
const retryShortenLinkController = new RetryShortenLinkController();

urlRouter.post('/createlink', urlBodyValidation, createLinkController.handle);
urlRouter.get('/:hash', getUrlShortenerController.handle);
urlRouter.put('/update/:hash', notUpdateLinkController.handle);
urlRouter.delete('/delete/:hash', notDeleteLinkController.handle);
urlRouter.put('/status/:id', updateIsActiveLinkController.handle);
urlRouter.post('/retryshorturl', retryShortenLinkController.handle);

export default urlRouter;
