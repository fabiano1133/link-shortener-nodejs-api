import { ICreateLinks } from '@modules/links/domain/models/ICreateLink';
import { model, Schema } from 'mongoose';

const linkSchema = new Schema<ICreateLinks>({
    url: { type: String, required: true },
    isShorted: Boolean,
});

export const Link = model<ICreateLinks>('Link', linkSchema);
