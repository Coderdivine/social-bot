import { Schema, model, Document, Types } from 'mongoose';

interface ITweet extends Document {
  tweetId: string;
  text?: string;
  media: Types.ObjectId[];
  createdAt: Date;
}

const tweetSchema = new Schema<ITweet>({
  tweetId: { type: String, required: true, unique: true },
  text: String,
  media: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  createdAt: { type: Date, default: Date.now }
});

export const Tweet = model<ITweet>('x-social-tweet', tweetSchema);
