import { UpdateIsActiveShortenedUrlUseCase } from '@modules/url/services/UpdateIsActiveShortenedUrlUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateIsActiveShortenerUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const { isActive } = req.body;

        const updateIsActiveShortenedUrlUseCase = container.resolve(
            UpdateIsActiveShortenedUrlUseCase
        );

        const url = await updateIsActiveShortenedUrlUseCase.execute(id, isActive);

        return res.status(204).json(url);
    }
}
