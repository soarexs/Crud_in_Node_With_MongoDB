import { Router } from "express";

import { handle as handleCreateUser } from "../controllers/register/create-user.controller";
import { handle as handleDeleteUsers } from "../controllers/register/delete-user.controller";
import { handle as handleDeleteById} from "../controllers/register/deleteById-user.controller";
import { handle as handleFindUser } from "../controllers/register/find-user.controller";
import { handle as handleListUsers} from "../controllers/register/list-users.controller";
import { handle as handleUpdateUser } from "../controllers/register/update-user.controller";

const router = Router()

router.post("/create", handleCreateUser)
router.get("/users", handleListUsers)
router.get("/user/:id", handleFindUser)
router.delete("/delete", handleDeleteUsers)
router.delete("/delete/:id", handleDeleteById)
router.patch("/update/:id", handleUpdateUser)

export default router