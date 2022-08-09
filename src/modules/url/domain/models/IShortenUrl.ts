import { Document } from 'mongoose';

export interface IShortenUrl extends Document<IShortenUrl> {
    url: string;
    hash: string;
    shortUrl: string;
    isShortened: boolean;
    isActive: boolean;
    createdAt: Date;
}
