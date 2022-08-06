import { Request, Response } from 'express';
import { ShowLinkUseCase } from '../../../services/ShowLinkUseCase';

export class ShowLinkController {
    async handle(req: Request, res: Response): Promise<Response | null> {
        const { id } = req.params;

        const showLinkUseCase = new ShowLinkUseCase();

        const link = await showLinkUseCase.execute(id);

        return res.json(link);
    }
}
