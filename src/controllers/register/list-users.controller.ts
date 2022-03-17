import { Response } from "express";
import User from "../../models/user.model";

const handle = async (res: Response) => {
    const listUsers = await User.find()
    if (!listUsers)
        throw res.status(400).send({ error: "could not list users" })

    res.status(200).send({ users: listUsers })
}