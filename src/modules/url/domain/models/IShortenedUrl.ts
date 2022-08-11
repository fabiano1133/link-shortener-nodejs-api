import { Date, Document } from 'mongoose';

export interface IShortenedUrl extends Document<IShortenedUrl> {
    url: string;
    hash: string;
    shortUrl: string;
    isShortened: boolean;
    isActive: boolean;
    expired: boolean;
    createAt: Date;
    expiresAt: Date;
}
