import { Router, Request, Response } from 'express';
import { postTextTweet, postMediaTweet, postThread } from '../services/tweetService';

const router = Router();

router.post('/text', async (req: Request, res: Response) => {
  try {
    const data = await postTextTweet(req.body.text);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

router.post('/media', async (req: Request, res: Response) => {
  try {
    const data = await postMediaTweet(req.body.text, req.body.mediaId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

router.post('/thread', async (req: Request, res: Response) => {
  try {
    const data = await postThread(req.body.texts);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
