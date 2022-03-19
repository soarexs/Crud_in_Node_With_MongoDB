import { Response } from "express"
import { HttpError } from "../../error/http.error"
import User from "../../models/user.model"

const handle = async (res: Response) => {
    const deleted = await User.deleteMany()
    if (!deleted)
        throw new HttpError(400, "could not delete users")

    res.status(200).send({ message: "users was deleted" })
}

export { handle }