import { Date, Document } from 'mongoose';

export interface IShortenUrl extends Document<IShortenUrl> {
    url: string;
    hash: string;
    shortUrl: string;
    isShortened: boolean;
    isActive: boolean;
    createAt: Date;
    expiresAt: Date;
}
