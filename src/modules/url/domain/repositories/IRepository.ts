export interface IRepository {
    create(url: string, hash: string, shortUrl: string): Promise<any>;
    findByShortenUrl(url: string): Promise<any>;
    findByHash(hash: string): Promise<any>;
    updateShortUrl(shortUrl: string): Promise<any>;
}
