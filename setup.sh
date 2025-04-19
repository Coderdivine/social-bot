#!/usr/bin/env bash
set -e



# 3. Scaffold Folder Structure
echo "Scaffolding folders..."
mkdir -p tests/{unit,integration}                   # Tests :contentReference[oaicite:8]{index=8}

# 4. Create .gitignore
echo "Creating .gitignore..."
cat > .gitignore << 'EOF'
node_modules/
dist/
.env

EOF                                              # TS compiler settings :contentReference[oaicite:11]{index=11}

# 6. Create nodemon.json
echo "Creating nodemon.json..."
cat > nodemon.json << 'EOF'
{
  "watch": ["src"],
  "ext": "ts,js,json",
  "ignore": ["dist", "node_modules"],
  "exec": "npx ts-node src/index.ts"
}
EOF                                              # Nodemon config for ts-node :contentReference[oaicite:12]{index=12}

# 7. Seed Starter Files
echo "Seeding starter TypeScript files..."
# src/index.ts
cat > src/index.ts << 'EOF'
import app from './app';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
EOF

# src/app.ts
cat > src/app.ts << 'EOF'
import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());
export default app;
EOF

# config/index.ts
cat > src/config/index.ts << 'EOF'
import dotenv from 'dotenv';
dotenv.config();
export const config = {
  port: process.env.PORT || 3000,
};
EOF

# clients/twitterClient.ts
cat > src/clients/twitterClient.ts << 'EOF'
import { TwitterApi } from 'twitter-api-v2';
import { config } from '../config';

export const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN!,
  accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});
EOF

# services/tweetService.ts
cat > src/services/tweetService.ts << 'EOF'
import { twitterClient } from '../clients/twitterClient';

export async function postTextTweet(text: string) {
  return twitterClient.v2.tweet({ text });
}
EOF

# utils/errorHandler.ts
cat > src/utils/errorHandler.ts << 'EOF'
export function handleError(err: unknown) {
  console.error('Error:', err);
  process.exit(1);
}
EOF

# scripts/deploy.sh
cat > scripts/deploy.sh << 'EOF'
#!/usr/bin/env bash
echo "Deploy logic goes here"
EOF
chmod +x scripts/deploy.sh

# scripts/refreshTokens.ts
cat > scripts/refreshTokens.ts << 'EOF'
import { twitterClient } from '../src/clients/twitterClient';
async function refresh() {
  const { client: refreshed } = await twitterClient.refreshOAuth2Token();
  console.log('Refreshed tokens', refreshed);
}
refresh().catch(console.error);
EOF

echo "Setup complete! 🎉"
echo "Run 'npm run dev' to start the server."
echo "Run 'npm run dev' to execute tests."