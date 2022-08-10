import { ReCreateShortenedUrlUseCase } from '@modules/url/services/ReCreateShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ReCreateShortendUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { url } = req.body;

        const reCreateShortenedUrlUseCase = container.resolve(
            ReCreateShortenedUrlUseCase
        );

        await reCreateShortenedUrlUseCase.execute(url);

        return res.status(204);
    }
}
