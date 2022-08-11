export interface IRepository {
    create(url: string, hash: string, shortUrl: string): Promise<any>;
    findByShortenedUrl(shortUrl: string): Promise<any>;
    findByHash(hash: string): Promise<any>;
    findUrlById(id: any): Promise<any>;
    updateShortUrl(shortUrl: string): Promise<any>;
    updateIsActive(id: string, isActive: boolean): Promise<any>;
    expiredUpdate(status: boolean): Promise<any>;
}
