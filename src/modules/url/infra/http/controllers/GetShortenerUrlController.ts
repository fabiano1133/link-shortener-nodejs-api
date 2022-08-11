import { GetShortenedUrlUseCase } from '@modules/url/services/GetShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetShortenerUrlController {
    async handle(req: Request, res: Response): Promise<any> {
        const { shortenerUrl } = req.params;

        const getShortenedUrlUseCase = container.resolve(GetShortenedUrlUseCase);

        const shortenedUrl = await getShortenedUrlUseCase.execute(shortenerUrl);

        return res.redirect(shortenedUrl.url);
    }
}
