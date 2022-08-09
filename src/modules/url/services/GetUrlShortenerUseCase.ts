import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class GetUrlShortenerUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(hash: string): Promise<any> {
        const url = await this.repository.findByHash(hash);

        if (!url) {
            throw new AppError(`URL NOT FOUND`, 404);
        }

        if (url.isActive === false) {
            throw new AppError(`Inactive URL`, 404);
        }
        return url;
    }
}
