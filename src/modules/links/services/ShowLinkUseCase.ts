import { IResponseLink } from '../domain/models/IResponseLink';
import { Link } from '../infra/schemas/schema-link';

export class ShowLinkUseCase {
    async execute(id: string): Promise<IResponseLink | null> {
        const link = await Link.findById({ _id: id });

        return link;
    }
}
