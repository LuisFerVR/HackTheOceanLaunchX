class AnimalService {
    static filterByName(animals, name){
        const animalsByName = animals.filter((animal) => animal.name == name);
        return animalsByName;
    }
}

module.exports = AnimalService;