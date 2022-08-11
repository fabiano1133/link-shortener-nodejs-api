import { IShortenedUrl } from '@modules/url/domain/models/IShortenedUrl';
import { Model, model, Schema } from 'mongoose';

const date = new Date();

const urlSchema: Schema = new Schema<IShortenedUrl>({
    url: { type: String, required: true, trim: true },
    hash: { type: String, required: true },
    shortUrl: { type: String, required: true, trim: true },
    isShortened: { type: Boolean, required: true, default: true },
    isActive: { type: Boolean, required: true, default: true },
    expired: { type: Boolean, required: true, default: false },
    createAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, default: date.setDate(date.getDate() + 7) },
});

export const Url: Model<IShortenedUrl> = model<IShortenedUrl>('Url', urlSchema);
