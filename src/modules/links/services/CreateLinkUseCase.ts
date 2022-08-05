import { db } from '../../../shared/db';
import { ICreateLinks } from '../domain/models/ICreateLink';

export class CreateLinkUseCase {
    async execute({ url, isShorted }: ICreateLinks): Promise<any> {
        const data = db;

        const link = {
            url,
            isShorted,
        };

        data.push(link);

        return link;
    }
}
