import express from "express";
const router = express.Router()
import { createcomment, getallcomments } from "../controllers/comment.js";

router.post('/createcomment/:poll_id/:user_id',createcomment)
router.get('/getallcomments',getallcomments)
export default router;