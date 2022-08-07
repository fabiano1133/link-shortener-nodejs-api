import { IResponseShortenUrl } from '@modules/url/domain/models/IResponseShortenUrl';

export interface IRepository {
    findById(id: string): Promise<IResponseShortenUrl | null>;
}
