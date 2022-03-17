import { Request, Response } from "express";
import User from "../../models/user.model";

const handle = async (req: Request, res: Response) => {
    const { id } = req.params
    const foundUser = await User.findById(id)

    if (!foundUser)
        res.status(400).send({ error: "could not find user" })

    res.status(200).send({ user: foundUser })
}