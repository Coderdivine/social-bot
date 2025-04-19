# X (Formerly Twitter) Bot - Post Scheduler

A Node.js application to schedule posts on X (formerly Twitter) with support for text, images, and threads.

## Features

- 📅 Schedule posts for future publication
- 🖼️ Post with or without images
- 🧵 Create threaded posts (Twitter threads)
- ⏱️ Automatic queue processing

## Supported Post Types

1. **Text Posts** - Simple text-based tweets
2. **Media Posts** - Text with attached images
3. **Threads** - Series of connected tweets

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   npm run dev


### File structure

```txt
├── .env.example
├── setup.sh
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── Dockerfile
│
├── config/
│   └── index.ts
│   └── twitter.ts
│   └── logger.ts
│
├── clients/
│   └── twitterClient.ts
│   └── mediaClient.ts
│
├── services/
│   └── tweetService.ts
│   └── mediaService.ts
│   └── threadService.ts
│
├── models/
│   └── tweet.ts
│   └── media.ts
│
├── utils/
│   └── errorHandler.ts
│   └── scheduler.ts
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── scripts/
│   └── deploy.sh
│   └── refreshTokens.ts
│
└── src/
    └── index.ts
    └── app.ts

```