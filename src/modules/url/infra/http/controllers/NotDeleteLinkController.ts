import { NotDeleteLinkUseCase } from '@modules/url/services/notDeleteLinkUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class NotDeleteLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { hash } = req.params;

        const notDeleteLinkUseCase = container.resolve(NotDeleteLinkUseCase);

        await notDeleteLinkUseCase.execute(hash);

        return res.status(204);
    }
}
