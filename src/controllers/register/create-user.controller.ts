import User from "../../models/user.model"
import { Request, Response } from "express"

const handle = async (req: Request, res: Response) => {
    const user = await User.create(req.body)
    if (!user)
        throw res.status(400).send({ error: "could not create user" })

    res.status(200).send({ user: user })
}

export { handle }