import { Request, Response } from "express";
import { HttpError } from "../../error/http.error";
import User from "../../models/user.model";

const handle = async (req: Request, res: Response) => {
    const { id } = req.params
    const foundUser = await User.findById(id)

    if (!foundUser)
        throw new HttpError(400, "could not found user")

    res.status(200).send({ user: foundUser })
}

export { handle }