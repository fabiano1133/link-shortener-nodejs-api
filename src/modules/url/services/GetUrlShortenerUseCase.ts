import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
export class GetUrlShortenerUseCase {
    constructor(
        @inject('Repository')
        private repository: IRepository
    ) {}

    async execute(hash: string): Promise<any> {
        const urlHash = await this.repository.findByHash(hash);

        if (!urlHash) {
            throw new AppError(`URL NOT FOUND`, 404);
        }
        return urlHash;
    }
}
