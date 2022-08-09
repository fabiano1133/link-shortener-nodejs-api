import { UpdateIsActiveLinkUseCase } from '@modules/url/services/UpdateIsActiveLinkUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateIsActiveLinkController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const { isActive } = req.body;

        const updateIsActiveLinkUseCase = container.resolve(UpdateIsActiveLinkUseCase);

        const url = await updateIsActiveLinkUseCase.execute(id, isActive);

        return res.status(204).json(url);
    }
}
