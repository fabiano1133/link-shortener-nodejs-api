import { IShortenUrl } from '@modules/url/domain/models/IShortenUrl';
import { Url } from '@modules/url/infra/schemas/schema';

export class CreateLinkUseCase {
    async execute({ url, isShorted }: IShortenUrl): Promise<void> {
        const link: IShortenUrl = await Url.create({
            url,
            isShorted,
        });
        await link.save();
    }
}
