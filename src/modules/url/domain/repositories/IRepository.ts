export interface IRepository {
    create(url: string): Promise<any>;
    findByIdUrlShorterner(id: string): Promise<any>;
}
