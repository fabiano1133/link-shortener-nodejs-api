import { AppError } from '@shared/errors/AppError';
import shortid from 'shortid';
import { inject, injectable } from 'tsyringe';
import { config } from 'utils/constants';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class ReCreateExpiredShortenedUrlUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(shortUrl: string): Promise<any> {
        const shortenedUrl = await this.repository.findByShortenedUrl(shortUrl);

        if (!shortenedUrl) {
            throw new AppError(`Shortened URL not found`, 404);
        }

        if (shortenedUrl.expired === false) {
            throw new AppError(`Unexpired URL`, 400);
        }

        if (shortenedUrl.expired === true) {
            await this.repository.expiredUpdate((shortenedUrl.expired = false));

            const hash = shortid();

            const shortenUrl = `${config.BASE_URL}/v1/${hash}`;

            const newShortenedUrl = await this.repository.create(
                shortUrl,
                hash,
                shortenUrl
            );
            return newShortenedUrl;
        }
    }
}
