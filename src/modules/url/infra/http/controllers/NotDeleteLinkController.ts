import { NotDeleteLinkUseCase } from '@modules/url/services/notDeleteLinkUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class NotDeleteLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { hash } = req.params;
        const { shortUrl } = req.body;

        const notDeleteLinkUseCase = container.resolve(NotDeleteLinkUseCase);

        const url = await notDeleteLinkUseCase.execute(hash, shortUrl);

        return res.json(url);
    }
}
