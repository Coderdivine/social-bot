import { TwitterApi } from "twitter-api-v2";
import { TwitterApiRateLimitPlugin } from "@twitter-api-v2/plugin-rate-limit";

const rateLimitPlugin = new TwitterApiRateLimitPlugin();
export const twitterClient = new TwitterApi(
  {
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET!,
    accessToken: process.env.TWITTER_ACCESS_TOKEN!,
    accessSecret: process.env.TWITTER_ACCESS_SECRET!,
  },
  {
    plugins: [rateLimitPlugin],
  }
);

export { rateLimitPlugin };
