import { Request, Response } from 'express';
import { ListLinkUseCase } from '../../services/ListLinkUseCase';

export class ListLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listLinkUseCase = new ListLinkUseCase();

        const link = await listLinkUseCase.execute();

        return res.status(201).json(link).send();
    }
}
