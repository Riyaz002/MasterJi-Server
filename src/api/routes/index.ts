import { Router } from "express";
import authentication from "./authentication";
import page from "./page";

const router = Router();

router.use(authentication);
router.use(page);

export default router;
