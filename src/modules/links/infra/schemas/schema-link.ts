import { ICreateLinks } from '@modules/links/domain/models/ICreateLink';
import { Model, model, Schema } from 'mongoose';

const linkSchema: Schema = new Schema<ICreateLinks>({
    url: { type: String, required: true },
    isShorted: Boolean,
});

export const Link: Model<ICreateLinks> = model<ICreateLinks>('Link', linkSchema);
