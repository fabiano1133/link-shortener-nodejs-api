import { IRepository } from '@modules/url/domain/repositories/IRepository';
import { Url } from '@modules/url/infra/schemas/schema';

export class Repository implements IRepository {
    async updateShortUrl(shortUrl: string): Promise<any> {
        const url = await Url.updateOne({ shortUrl });

        return url;
    }
    async findByShortenUrl(shortUrl: string): Promise<any> {
        const url = await Url.findOne({ shortUrl: shortUrl });

        return url;
    }

    async create(url: string, hash: string, shortUrl: string): Promise<any> {
        const urlShortener = await Url.create({ url, hash, shortUrl });

        return urlShortener;
    }

    async findByHash(hash: string): Promise<any> {
        const urlHash = await Url.findOne({ hash });

        return urlHash;
    }
}
