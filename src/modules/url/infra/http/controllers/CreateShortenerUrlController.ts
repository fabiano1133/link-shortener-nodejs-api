import { CreateShortenedUrlUseCase } from '@modules/url/services/CreateShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
export class CreateShortenerUrlController {
    async handle(req: Request, res: Response): Promise<any> {
        const { url } = req.body;

        const createShortenedUrlUseCase = container.resolve(CreateShortenedUrlUseCase);

        const urlShortened = await createShortenedUrlUseCase.execute(url);

        return res.status(201).json({
            url: urlShortened,
            message: `your shortened url will expire in 7 days`,
        });
    }
}
