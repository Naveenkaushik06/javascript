module.exports = function(inventory) {
    if (!inventory) {
        return [];
    } else {
        let BMWAndAudi = [];
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi") {
                BMWAndAudi.push(inventory[i]);

            }
        }
        const carBMWAndAudi = JSON.stringify(BMWAndAudi);
        return carBMWAndAudi;

    }
}