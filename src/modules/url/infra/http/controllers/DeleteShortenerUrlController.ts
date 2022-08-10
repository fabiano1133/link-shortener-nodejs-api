import { DeleteShortenedUrlUseCase } from '@modules/url/services/DeleteShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteShortenerUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { hash } = req.params;

        const deleteShortenedUrlUseCase = container.resolve(DeleteShortenedUrlUseCase);

        await deleteShortenedUrlUseCase.execute(hash);

        return res.status(204);
    }
}
