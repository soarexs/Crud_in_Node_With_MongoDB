import User from "../../models/user.model"
import { Request, Response } from "express"
import { HttpError } from "../../error/http.error"

const handle = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    const person = {
        name,
        email,
        password
    }
    
    const foundUser = await User.findOne(email)
    if(foundUser)
        throw new HttpError(400, "user already exists")

    try {
        const user = await User.create(person)
        res.status(200).send({ user: user })
    } catch {
        throw new HttpError(400, "could not create user")    
    }
}

export { handle }