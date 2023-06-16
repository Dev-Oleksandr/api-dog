import dogsService from "./dogs.service.js";

class DogsController {

    async createDog(req, res, next) {
        try {
            const {name, color, tail_length, weight} = req.body
            const dog = await dogsService.createDog(name, color, +tail_length, +weight)
            return res.json({success: true, dog})
        } catch (e) {
            next(e)
        }
    }

    async getDogs(req, res, next) {
        try {
            const {attributes, order, pageNumber, limit} = req.query
            const dogs = await dogsService.getDogs({
                attributes,
                order,
                pageNumber: +pageNumber || 1,
                limit: +limit?.split('=')[1] || 10
            })
            return res.json({success: true, dogs})
        } catch (e) {
            next(e)
        }
    }
}

export default new DogsController()