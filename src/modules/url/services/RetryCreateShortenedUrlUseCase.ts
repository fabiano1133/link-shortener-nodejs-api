import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class RetryCreateShortenedUrlUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(shortUrl: string, hash: string): Promise<void> {
        const url = await this.repository.findByHash(hash);

        if (!url) {
            throw new AppError(`URL not found`, 404);
        }

        if (url.shortUrl) {
            throw new AppError(
                `it is not possible to shorten an already shortened url`,
                400
            );
        }
    }
}
