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
        //const redisCache = new RedisCacheService();

        const url = await this.repository.findByHash(hash);

        //await redisCache.save('List', 'teste');

        if (!url) {
            throw new AppError(`URL NOT FOUND OR EXPIRED`, 404);
        }

        if (url.isActive === false) {
            throw new AppError(`Inactive URL`, 400);
        }
        return url;
    }
}
