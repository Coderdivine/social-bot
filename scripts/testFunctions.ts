import fs from "fs";
import path from "path";
import "../src/config/index";
import { twitterClient, rateLimitPlugin } from "../src/clients/twitterClient";
import { uploadMedia } from "../src/services/mediaService";
import {
  postTextTweet,
  postMediaTweet,
  postThread,
} from "../src/services/tweetService";

(async () => {
  const mediaPath = path.resolve(__dirname, "../src/media/test.png");
  const buffer = fs.readFileSync(mediaPath);

  const mediaQuota = await rateLimitPlugin.v1.getRateLimit("media/upload");
  if (!mediaQuota) {
    console.warn("No media/upload quota data yet; proceeding with upload.");
  } else if (mediaQuota.remaining === 0) {
    console.error(
      "Media quota exhausted until",
      new Date(mediaQuota.reset * 1000)
    );
    return;
  }

  const mediaId = await uploadMedia(buffer, "image/png");
  console.log("✅ Uploaded mediaId:", mediaId);

  const tweetQuota = await rateLimitPlugin.v2.getRateLimit("tweets");
  if (!tweetQuota) {
    console.warn("No tweets quota data yet; proceeding with tweet.");
  } else if (tweetQuota.remaining < 3) {
    console.error(
      "Insufficient tweet quota (need 3), remaining:",
      tweetQuota.remaining
    );
    return;
  }

  const textData = await postTextTweet(
    "🔧 Test text tweet at " + new Date().toISOString()
  );
  console.log("✅ Text tweet ID:", textData.id);

  // 2. Media + Text
  const mediaData = await postMediaTweet("🖼️ Test media tweet", mediaId);
  console.log("✅ Media tweet ID:", mediaData.id);

  // 3. Thread
  const threadIds = (
    await postThread([
      "🧵 Thread part 1 – Hello!",
      "🧵 Thread part 2 – Testing.",
      "🧵 Thread part 3 – Goodbye!",
    ])
  ).map((t) => t.id);
  console.log("✅ Thread IDs:", threadIds);

  process.exit(0);
})();
