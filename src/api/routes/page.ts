import { Router } from 'express';
import getPage from '../controllers/page';

const router = Router();

router.get('/pages/:slug', getPage);

export default router;