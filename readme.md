```txt
├── .env.example
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