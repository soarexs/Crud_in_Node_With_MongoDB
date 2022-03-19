import { Request, Response } from "express"
import { HttpError } from "../../error/http.error"
import User from "../../models/user.model"

const handle = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, password } = req.body
    const person = {
        name,
        email,
        password
    }
    
    const update = await User.updateOne({ _id: id }, person)

    if(!update) 
        throw new HttpError(400, "could not update user")

    res.status(200).send(update)
}

export { handle }