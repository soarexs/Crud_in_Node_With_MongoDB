import { Router } from "express";
import { handle as handleCreateUser } from "../controllers/register/create-user.controller";
const router = Router()

router.post("/user", handleCreateUser)

export default router