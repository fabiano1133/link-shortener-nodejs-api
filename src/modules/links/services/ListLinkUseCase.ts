import { db } from '../../../shared/db';

export class ListLinkUseCase {
    async execute(): Promise<any[]> {
        const data = db;

        const links = data;

        return links;
    }
}
