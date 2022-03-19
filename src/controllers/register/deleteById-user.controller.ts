import { Request, Response } from "express"
import { HttpError } from "../../error/http.error"
import User from "../../models/user.model"

const handle = async (req: Request, res: Response) => {
    const { id } = req.params
    const deleteUser = await User.findByIdAndDelete(id)

    if (!deleteUser)
        throw new HttpError(400, "could not delete user")

    res.status(200).send({ message: "user was deleted" })
}

export { handle }