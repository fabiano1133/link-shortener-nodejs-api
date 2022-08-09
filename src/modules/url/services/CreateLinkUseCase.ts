import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';
import shortId from 'shortid';
import { config } from 'utils/constants';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateLinkUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(url: string): Promise<any> {
        const hash = shortId.generate();

        const shortUrl = `${config.BASE_URL}/${hash}`;

        const newUrl = await this.repository.create(url, hash, shortUrl);

        return newUrl;
    }
}

export default CreateLinkUseCase;
