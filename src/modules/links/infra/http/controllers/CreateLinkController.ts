import { Request, Response } from 'express';
import { CreateLinkUseCase } from '../../../services/CreateLinkUseCase';

export class CreateLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { url, isShorted } = req.body;

        const createLinkUseCase = new CreateLinkUseCase();

        await createLinkUseCase.execute({ url, isShorted });

        return res.status(201).send();
    }
}
