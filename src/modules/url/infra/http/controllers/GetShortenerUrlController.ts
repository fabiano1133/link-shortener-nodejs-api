import { GetShortenedUrlUseCase } from '@modules/url/services/GetShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetShortenerUrlController {
    async handle(req: Request, res: Response): Promise<any> {
        const { hash } = req.params;

        const getShortenedUrlUseCase = container.resolve(GetShortenedUrlUseCase);

        const urlHash = await getShortenedUrlUseCase.execute(hash);

        return res.redirect(urlHash.url);
    }
}
