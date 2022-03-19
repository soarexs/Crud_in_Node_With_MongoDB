import { App } from "./app";

const main = () => {
    const app = new App
    app.routes()
    app.middlewares()
    app.listen(5000, 'Server is running!')
}

main()