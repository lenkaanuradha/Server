import express from "express";
const router = express.Router()
import { getUser } from "../controllers/users.js";
import { getallUsers } from "../controllers/users.js";
router.get('/getallUsers',getallUsers)
router.get('/getUser/:user_id',getUser)
export default router;