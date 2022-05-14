const reader = require("../../../lib/utils/Reader");
describe("test para Reader",() => {
    test("1) recibir numero de ejemplares", () => {
        let animalNumbers = reader.readJsonFile("InfMarAniMex.json");
        expect(animalNumbers.length).toBe(4);
    });
});