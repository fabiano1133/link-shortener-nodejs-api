import { IRepository } from '@modules/url/domain/repositories/IRepository';
import { Url } from '@modules/url/infra/schemas/schema';

export class Repository implements IRepository {
    async findByIdUrlShorterner(id: string): Promise<any> {
        const urlId = await Url.findById({ _id: id });

        return urlId;
    }

    async create(url: string): Promise<any> {
        const urlShortener = await Url.create({ url });

        return urlShortener;
    }
}
