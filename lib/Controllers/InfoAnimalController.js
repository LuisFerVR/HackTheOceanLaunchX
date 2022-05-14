const reader = require("../../lib/utils/Reader");
class InfoAnimalController{
    static show(name) {
        const animals = reader.readJsonFile("InfMarAniMex.json");
        const infoAnimals = ExplorerService.getExplorersUsernamesByMission(animals, name);
        return infoAnimals;
    }
}

module.exports = InfoAnimalController;