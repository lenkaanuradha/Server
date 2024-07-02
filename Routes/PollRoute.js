import express from "express";
const router = express.Router()
import { createpoll,getpolls } from "../controllers/poll.js";

router.post('/createpoll/:user_id',createpoll)
router.get('/getallpolls',getpolls)
export default router;