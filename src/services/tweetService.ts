import { twitterClient } from '../clients/twitterClient';
import { Tweet } from '../models/tweet';
import { Media } from '../models/media';

/** Posts a text-only tweet and saves it */
export async function postTextTweet(text: string) {
  const { data } = await twitterClient.v2.tweet({ text });
  await new Tweet({ tweetId: data.id, text }).save();
  return data;
}

/** Posts a media tweet (media must already be uploaded) and saves the Tweet */
export async function postMediaTweet(text: string, mediaId: string) {
  const mediaDoc = await Media.findOne({ mediaId });
  const { data } = await twitterClient.v2.tweet({
    text,
    media: { media_ids: [mediaId] }
  });
  await new Tweet({
    tweetId: data.id,
    text,
    media: mediaDoc ? [mediaDoc._id] : []
  }).save();
  return data;
}

/** Posts a thread of texts in sequence, saving each Tweet */
export async function postThread(texts: string[]) {
  let lastId: string | undefined;
  const results = [];
  for (const txt of texts) {
    const { data } = await twitterClient.v2.tweet({
      text: txt,
      reply: lastId ? { in_reply_to_tweet_id: lastId } : undefined
    });
    lastId = data.id;
    await new Tweet({ tweetId: data.id, text: txt }).save();
    results.push(data);
  }
  return results;
}
