import { Router } from "express";
import { authenticator } from "./authenticator";

const router = Router();

router.use(authenticator);

export default router;