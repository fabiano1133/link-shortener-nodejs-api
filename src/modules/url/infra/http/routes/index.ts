import { Router } from 'express';
import { CreateLinkController } from '@modules/url/infra/http/controllers/CreateLinkController';
import { GetUrlController } from '../controllers/GetUrlController';
import { urlBodyValidation } from '@config/validation/url-validation.config';
import { NotUpdateLinkController } from '../controllers/NotUpdateLinkController';

const urlRouter = Router();

const createLinkController = new CreateLinkController();
const getUrlShortenerController = new GetUrlController();
const notUpdateLinkController = new NotUpdateLinkController();

urlRouter.post('/createlink', urlBodyValidation, createLinkController.handle);
urlRouter.get('/:hash', getUrlShortenerController.handle);
urlRouter.put('/update/:hash', notUpdateLinkController.handle);

export default urlRouter;
