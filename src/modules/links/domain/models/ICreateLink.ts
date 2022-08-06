import { Document } from 'mongoose';

export interface ICreateLinks extends Document<ICreateLinks> {
    url: string;
    isShorted: boolean;
}
