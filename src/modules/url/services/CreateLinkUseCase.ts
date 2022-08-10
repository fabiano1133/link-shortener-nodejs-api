import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';
import shortId from 'shortid';
import { config } from 'utils/constants';
let ObjectId = require('node-time-uuid');

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

        newUrl.save();

        return newUrl;
    }
}

export default CreateLinkUseCase;
