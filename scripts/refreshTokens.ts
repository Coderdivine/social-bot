import { twitterClient } from '../src/clients/twitterClient';
async function refresh() {
  const { client: refreshed } = await twitterClient.refreshOAuth2Token();
  console.log('Refreshed tokens', refreshed);
}
refresh().catch(console.error);
