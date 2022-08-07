import { IShortenUrl } from '@modules/url/domain/models/IShortenUrl';
import { Model, model, Schema } from 'mongoose';

const urlSchema: Schema = new Schema<IShortenUrl>({
    url: { type: String, required: true },
    isShorted: { type: Boolean, default: true },
});

export const Url: Model<IShortenUrl> = model<IShortenUrl>('Url', urlSchema);
