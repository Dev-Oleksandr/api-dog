import {DogsModel} from "../dogs/dogs.model.js";

class InitDb {
    async initDogsData() {
        const dogsCount = await DogsModel.count()
        if (!dogsCount) {
            await DogsModel.create({ name: 'Neo', color: 'red & amber', tail_length: 22, weight: 32 })
            await DogsModel.create({ name: 'Jessy', color: 'black & white', tail_length: 7, weight: 14 })
        }
    }
}

export default new InitDb()