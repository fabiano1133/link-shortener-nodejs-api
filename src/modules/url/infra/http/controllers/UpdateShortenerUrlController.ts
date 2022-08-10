import { UpdateShortenedUrlUseCase } from '@modules/url/services/UpdateShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateShortenerUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { hash } = req.params;
        const { shortUrl } = req.body;

        const updateShortenedUrlUseCase = container.resolve(UpdateShortenedUrlUseCase);

        const url = await updateShortenedUrlUseCase.execute(hash, shortUrl);

        return res.json(url);
    }
}
