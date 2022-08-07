import { CreateLinkUseCase } from '@modules/url/services/CreateLinkUseCase';
import { Request, Response } from 'express';

export class CreateLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { url, isShorted } = req.body;

        const createLinkUseCase = new CreateLinkUseCase();

        await createLinkUseCase.execute({ url, isShorted });

        return res.status(201).send();
    }
}
