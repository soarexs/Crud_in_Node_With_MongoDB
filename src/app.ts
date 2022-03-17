import express, { Application }  from "express";
import bodyParser from "body-parser";

export class App {
    private app: Application

    constructor() {
        this.app = express()
        this.app.use(bodyParser)
    }

    listen() {
        this.app.listen(5000, () => console.log('Server is running!'))
    }
}