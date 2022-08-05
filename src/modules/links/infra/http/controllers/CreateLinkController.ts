import { Request, Response } from 'express';
import { CreateLinkUseCase } from '../../../../services/CreateLinkUseCase';

export class CreateLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, isShorted } = req.body;

        const createLinkUseCase = new CreateLinkUseCase();

        await createLinkUseCase.execute(name, isShorted);

        return res.status(201).send();
    }
}
