import { Router } from 'express';
import init from '../controllers/authentication';

const router = Router();

router.get('/init', init);

export default router;