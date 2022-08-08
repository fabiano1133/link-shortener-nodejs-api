import { IShortenUrl } from '@modules/url/domain/models/IShortenUrl';
import { Model, model, Schema } from 'mongoose';

const urlSchema: Schema = new Schema<IShortenUrl>({
    url: { type: String, required: true, trim: true },
    hash: { type: String, required: true },
    shortUrl: { type: String, required: true, trim: true },
    isShortened: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, required: true, default: Date.now() },
});

export const Url: Model<IShortenUrl> = model<IShortenUrl>('Url', urlSchema);
