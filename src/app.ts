import express, { Application } from "express";
import bodyParser from "body-parser";
import createUserRoute from "./routes/create-user.router";

export class App {
    private app: Application

    constructor() {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    routes() {
        this.app.use(createUserRoute)
    }

    listen(PORT: number, message: string) {
        this.app.listen(PORT, () => console.log(message))
    }
}