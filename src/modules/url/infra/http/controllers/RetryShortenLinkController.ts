import { RetryShortenLinkUseCase } from '@modules/url/services/RetryShortenLinkUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class RetryShortenLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { url } = req.body;

        const retryShortenLinkUseCase = container.resolve(RetryShortenLinkUseCase);

        await retryShortenLinkUseCase.execute(url);

        return res.status(204);
    }
}
