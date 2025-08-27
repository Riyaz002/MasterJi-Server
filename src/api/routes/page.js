import { Router } from 'express';
import getPage from '../controllers/page.js';

const router = Router();

router.get('/pages/:slug', getPage);

export default router;