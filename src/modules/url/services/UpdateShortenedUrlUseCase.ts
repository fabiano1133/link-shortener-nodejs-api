import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class UpdateShortenedUrlUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(hash: string, shortUrl: string): Promise<any> {
        const url = await this.repository.findByHash(hash);

        if (!url) {
            throw new AppError('URL not found!', 404);
        }

        if (url.isShortened === true) {
            throw new AppError('Unable to update an already shortened URL', 400);
        }
        return shortUrl;
    }
}
