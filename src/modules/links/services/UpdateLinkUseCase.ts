import { Link } from '../infra/schemas/schema-link';

export class UpdateLinkUseCase {
    async execute(id: string, isShorted: boolean): Promise<void> {
        const query = { _id: id };

        await Link.findOneAndUpdate(query, { $set: { isShorted: isShorted } });
    }
}
