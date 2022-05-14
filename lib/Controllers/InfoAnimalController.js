const reader = require("../../lib/utils/Reader");
const AnimalService = require("../services/AnimalService");
class InfoAnimalController{
    static show(name) {
        const animals = reader.readJsonFile("InfMarAniMex.json");
        const infoAnimals = AnimalService.filterByName(animals, name);
        return infoAnimals;
    }
}

module.exports = InfoAnimalController;