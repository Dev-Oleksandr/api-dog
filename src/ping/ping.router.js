import {Router} from "express";
import PingController from "./ping.controller.js";

const pingRouter = new Router()

pingRouter.get('/', PingController.getInfo)

export default pingRouter