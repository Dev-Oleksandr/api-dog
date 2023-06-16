import {Router} from "express";
import dogsRouter from "./dogs/dogs.router.js";
import pingRouter from "./ping/ping.router.js";

const routes = new Router()

routes.use('/dogs', dogsRouter)
routes.use('/dogs', pingRouter)

export default routes