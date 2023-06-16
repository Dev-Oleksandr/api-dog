import {DogsModel} from "./dogs.model.js";
import {ApiErrors} from "../errors/errors.api.js";
import scheme from "../../database/scheme.js";
import {QueryTypes} from "sequelize";

class DogsService {

    async createDog(name, color, tail_length, weight) {
        const existDog = await this.getDog({name})
        if (existDog)
            throw ApiErrors.badRequest('The dog already exist with this name')

        if ((isNaN(weight) || isNaN(tail_length)) && !this.isPositive(weight, tail_length))
            throw ApiErrors.badRequest('The tail_length or weight must be a number')

        const dog = await DogsModel.create({name, color, tail_length, weight})
        return dog
    }

    async getDog(options) {
        const dog = await DogsModel.findOne({where: options})
        return dog
    }

    async getDogs(data) {
        if (!data.attributes && data.order || data.attributes && !data.order) {
            throw ApiErrors.badRequest('You mustn\'t enter only attributes or order')
        }

        if (data.pageNumber && typeof data.pageNumber !== 'number' || typeof data.limit !== "number" && data.limit) {
            throw ApiErrors.badRequest('Incorrect values pageNumber or limit')
        }

        const orderBy = data.order ? `ORDER BY ${data.attributes} ${data.order}` : ''
        const offset = data.pageNumber * data.limit - data.limit

        const dogs = await scheme.query(`
            SELECT *
            FROM dogs
            ${orderBy}
            LIMIT ${data.limit} OFFSET ${offset}
        `, {
            raw: true,
            type: QueryTypes.SELECT
        })

        return dogs
    }

    isPositive(...numbers) {
        return numbers.every(number => number >= 0)
    }
}

export default new DogsService()