import { inject, injectable } from 'tsyringe';
import { IRepository } from '../domain/repositories/IRepository';

@injectable()
class CreateLinkUseCase {
    constructor(
        @inject('Repository')
        private readonly repository: IRepository
    ) {}

    async execute(url: string): Promise<any> {
        const urlShortener = await this.repository.create(url);

        return urlShortener;
    }
}

export default CreateLinkUseCase;
