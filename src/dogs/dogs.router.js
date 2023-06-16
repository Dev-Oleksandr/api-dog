import {Router} from "express";
import DogsController from "./dogs.controller.js";

const dogsRouter = new Router()

dogsRouter.get('/', DogsController.getDogs)
dogsRouter.post('/', DogsController.createDog)

export default dogsRouter