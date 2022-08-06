import { UpdateLinkUseCase } from '../../../services/UpdateLinkUseCase';
import { Request, Response } from 'express';

export class UpdateLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { isShorted } = req.body;

        const updateLinkUseCase = new UpdateLinkUseCase();

        const url = await updateLinkUseCase.execute(id, isShorted);

        return res.json(url);
    }
}
