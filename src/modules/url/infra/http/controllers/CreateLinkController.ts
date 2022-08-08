import CreateLinkUseCase from '@modules/url/services/CreateLinkUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
export class CreateLinkController {
    async handle(req: Request, res: Response): Promise<any> {
        const { url } = req.body;

        const createLinkUseCase = container.resolve(CreateLinkUseCase);

        const urlShortener = await createLinkUseCase.execute(url);

        return res.status(201).json(urlShortener);
    }
}
