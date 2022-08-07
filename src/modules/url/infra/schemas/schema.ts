import { IShortenUrl } from '@modules/url/domain/models/IShortenUrl';
import { Model, model, Schema } from 'mongoose';

const urlSchema: Schema = new Schema<IShortenUrl>({
    url: { type: String, required: true },
    isShorted: Boolean,
});

export const Url: Model<IShortenUrl> = model<IShortenUrl>('Link', urlSchema);
