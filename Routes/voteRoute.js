import express from "express";
const router = express.Router()
import { castvote,getallvotes } from "../controllers/vote.js";

router.post('/castvote/:pollid/:votedby',castvote)
router.get('/getallvotes',getallvotes)
export default router;