import { IResponseShortenUrl } from '@modules/url/domain/models/IResponseShortenUrl';
import { IRepository } from '@modules/url/domain/repositories/IRepository';
import { Url } from '@modules/url/infra/schemas/schema';

export class Repository implements IRepository {
    async findById(id: string): Promise<IResponseShortenUrl | null> {
        const url = await Url.findById({ _id: id });

        return url;
    }
}
