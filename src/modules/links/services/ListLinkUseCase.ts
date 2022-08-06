import { IResponseLink } from '../domain/models/IResponseLink';
import { Link } from '../infra/schemas/schema-link';

export class ListLinkUseCase {
    async execute(): Promise<IResponseLink[]> {
        const links = await Link.find();

        return links;
    }
}
