import { Router, Request, Response } from 'express';
import { uploadMedia } from '../services/mediaService';

const router = Router();


router.post('/upload', async (req: Request, res: Response) => {
  try {
    const buffer = Buffer.from(req.body.data, 'base64');
    const mediaId = await uploadMedia(buffer, req.headers['content-type'] as string);
    res.json({ mediaId });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router; 
