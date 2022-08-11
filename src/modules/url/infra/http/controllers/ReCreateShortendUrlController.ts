import { RetryCreateShortenedUrlUseCase } from '@modules/url/services/RetryCreateShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ReCreateShortendUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { url } = req.body;
        const { hash } = req.params;

        const reCreateShortenedUrlUseCase = container.resolve(
            RetryCreateShortenedUrlUseCase
        );

        await reCreateShortenedUrlUseCase.execute(url, hash);

        return res.status(204);
    }
}
