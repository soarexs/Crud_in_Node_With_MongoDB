import { Response } from "express"
import User from "../../models/user.model"

const handle = async (res: Response) => {
    const deleted = await User.deleteMany()
    if (!deleted)
        res.status(400).send({ error: "could not delete users" })

    res.status(200).send({ message: "users was deleted" })
}