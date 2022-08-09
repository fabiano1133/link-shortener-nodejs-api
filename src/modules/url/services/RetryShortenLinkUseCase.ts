import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class RetryShortenLinkUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(shortUrl: string): Promise<void> {
        const url = await this.repository.findByShortenedUrl(shortUrl);

        if (!url) {
            throw new AppError(`URL not found`, 404);
        }

        if (url.shortUrl) {
            throw new AppError(
                `it is not possible to shorten an already shortened url`,
                403
            );
        }
    }
}
