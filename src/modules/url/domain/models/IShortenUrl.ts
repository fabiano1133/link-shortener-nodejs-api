import { Document } from 'mongoose';

export interface IShortenUrl extends Document<IShortenUrl> {
    url: string;
    isShorted: boolean;
}
