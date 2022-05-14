class AnimalService {
    /* static getAnimalsByName(animals,name){
        const animalsByName = AnimalService.filterByName(animals, name);
        //const usernames = animalsByName.map((explorer) => explorer);
        return animalsByName;
    } */
    static filterByName(animals, name){
        const animalsByName = animals.filter((animal) => animal.name == name);
        return animalsByName;
    }
}

module.exports = AnimalService;