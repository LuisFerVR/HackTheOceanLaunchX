const AnimalService = require("../../../lib/services/AnimalService");
 
describe("Tests para AnimalService", () => {
    test("", () => {
        const animal = [{name: "Tortuga caguama",
            nickName: "tortuga boba",
            from: "México",
            peculiarity: "su cabeza mide aproximadamente 25cm",
            location: "Baja California, y llega a los estados de Quintana Roo, Campeche, Yucatán, Veracruz, Tabasco y Tamaulipas",
            info: "la pesca inadecuada, el robo de sus huevos y la degradación de las playas, la ha puesto en peligro de extinción",
            type: "Cheloniidae"}];
        var animalName = AnimalService.filterByName(animal, "Tortuga caguama");
        expect(animalName).toStrictEqual(animal);
    });
});