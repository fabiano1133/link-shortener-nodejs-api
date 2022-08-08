import { GetUrlShortenerUseCase } from '@modules/url/services/GetUrlShortenerUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetUrlController {
    async handle(req: Request, res: Response): Promise<any> {
        const { hash } = req.params;

        const getUrlShortenerUseCase = container.resolve(GetUrlShortenerUseCase);

        const urlHash = await getUrlShortenerUseCase.execute(hash);

        return res.redirect(urlHash.url);
    }
}
