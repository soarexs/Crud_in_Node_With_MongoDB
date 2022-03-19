import { Response } from "express";
import { HttpError } from "../../error/http.error";
import User from "../../models/user.model";

const handle = async (res: Response) => {
    const listUsers = await User.find()
    
    if (!listUsers)
        throw new HttpError(400, "could not list users")

    res.status(200).send({ users: listUsers })
}

export { handle }