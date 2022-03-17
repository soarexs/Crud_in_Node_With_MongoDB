import { Request, Response } from "express"
import User from "../../models/user.model"

const handle = async (req: Request, res: Response) => {
    const { id } = req.params
    const deleteUser = await User.findByIdAndDelete(id)

    if (!deleteUser)
        res.status(400).send({ error: "could not delete user" })

    res.status(200).send({ message: "user was deleted" })
}