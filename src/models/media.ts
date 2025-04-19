import { Schema, model, Document, Model } from 'mongoose';

interface IMedia extends Document {
  mediaId: string;
  mimeType: string;
  createdAt: Date;
}

const mediaSchema = new Schema<IMedia>({
  mediaId: { type: String, required: true, unique: true },
  mimeType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Media = model<IMedia>('x-social-media', mediaSchema);
