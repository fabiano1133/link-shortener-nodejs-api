import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class GetShortenedUrlUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(hash: string): Promise<any> {
        const url = await this.repository.findByHash(hash);

        if (!url) {
            throw new AppError(`URL NOT FOUND OR EXPIRED`, 404);
        }

        if (url.isActive === false) {
            throw new AppError(`Inactive URL`, 400);
        }
        return url;
    }
}
