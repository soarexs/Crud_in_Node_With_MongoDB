import express, { Application } from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/user.routes";
import { errorMiddleware } from "./middlewares/error-handler.middleware";
import { connect as connectMongoose } from "./database/mongoose";

export class App {
    private app: Application

    constructor() {
        this.app = express()
        this.middlewares
        this.init
    }
    init() {
        connectMongoose()
    }
    routes() {
        this.app.use(userRoute)
    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use(errorMiddleware)
    }

    listen(PORT: number, message: string) {
        this.app.listen(PORT, () => console.log(message))
    }
}