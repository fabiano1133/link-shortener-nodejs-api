import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';
//import RedisCacheService from '@shared/cache/RedisCacheService';

@injectable()
export class GetShortenedUrlUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(hash: string): Promise<any> {
        const dateNow = new Date().getDate();

        const url = await this.repository.findByHash(hash);

        if (!url) {
            throw new AppError(`URL NOT FOUND`, 404);
        }

        if (url.expiresAt.getDate() === dateNow) {
            await this.repository.expiredUpdate((url.expired = true));
            throw new AppError(`URL expired`, 400);
        }

        if (url.isActive === false) {
            throw new AppError(`Inactive URL`, 400);
        }

        if (url.expired === true) {
            throw new AppError(`URL expired!`, 400);
        }

        return url;
    }
}
