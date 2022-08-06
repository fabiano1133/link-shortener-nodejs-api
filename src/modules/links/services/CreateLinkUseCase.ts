import { ICreateLinks } from '../domain/models/ICreateLink';
import { Link } from '../infra/schemas/schema-link';

export class CreateLinkUseCase {
    async execute({ url, isShorted }: ICreateLinks): Promise<void> {
        const link: ICreateLinks = await Link.create({
            url,
            isShorted,
        });
        await link.save();
    }
}
