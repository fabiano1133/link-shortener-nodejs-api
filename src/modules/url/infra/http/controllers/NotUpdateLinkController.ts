import { NotUpdateLinkUseCase } from '@modules/url/services/NotUpdateLinkUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class NotUpdateLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { hash } = req.params;
        const { shortUrl } = req.body;

        const notUpdateLinkUseCase = container.resolve(NotUpdateLinkUseCase);

        const url = await notUpdateLinkUseCase.execute(hash, shortUrl);

        return res.json(url);
    }
}
