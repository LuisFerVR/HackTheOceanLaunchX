const InfoAnimalController = require("../../../lib/Controllers/InfoAnimalController");

describe("test para controller",() => {
    test("1) mostrar ejemplares en la BD provicional", () => {
        const animal1 = [{
            name: "Tortuga caguama",
            nickName: "tortuga boba",
            from: "México",
            peculiarity: "su cabeza mide aproximadamente 25cm",
            location: "Baja California, y llega a los estados de Quintana Roo, Campeche, Yucatán, Veracruz, Tabasco y Tamaulipas",
            info: "la pesca inadecuada, el robo de sus huevos y la degradación de las playas, la ha puesto en peligro de extinción",
            type: "Cheloniidae"
        }]
        const animalForName = InfoAnimalController.show("Tortuga caguama");
        expect(animalForName).toStrictEqual(animal1);
    });
});