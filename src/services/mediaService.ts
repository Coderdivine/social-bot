import { twitterClient } from '../clients/twitterClient';
import { Media } from '../models/media';


export async function uploadMedia(buffer: Buffer, mimeType: string): Promise<string> {
  const mediaId = await twitterClient.v1.uploadMedia(buffer, { mimeType });
  await new Media({ mediaId, mimeType }).save();
  return mediaId;
}
