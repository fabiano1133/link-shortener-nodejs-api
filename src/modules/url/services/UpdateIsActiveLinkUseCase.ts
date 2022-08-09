import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class UpdateIsActiveLinkUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(id: string, isActive: boolean): Promise<any> {
        const url = await this.repository.findUrlById(id);

        if (!url) {
            throw new AppError(`URL not found`, 404);
        }
        await this.repository.updateIsActive(id, isActive);

        return url;
    }
}
