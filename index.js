import express from 'express'
import dotenv from 'dotenv'
import scheme from './database/scheme.js'
import routes from "./src/routes.js";
import errorsMiddleware from "./src/errors/errors.middleware.js";
import InitDb from "./src/utils/initDb.js";
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use('/', routes)
app.use(errorsMiddleware)

async function startApplication() {
    try {
        await scheme.authenticate()
        await scheme.sync()
        await InitDb.initDogsData()

        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

startApplication()

// Sasha 1 - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJTYXNoYTEiLCJpYXQiOjE2ODYzMzIyMTUsImV4cCI6MTY4ODkyNDIxNX0.9pcwGxU8tHPlhwj6Pq18aSPUWcM7mvtbUjeMxyPS2qk
// Sasha 2 - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJTYXNoYTIiLCJpYXQiOjE2ODYzMzIyMzYsImV4cCI6MTY4ODkyNDIzNn0.nKzNbi7XJvrBgdaLFW7hEdxUqXqGoxKnk9LiYIRD0sk
