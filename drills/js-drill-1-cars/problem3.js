module.exports = function(inventory) {
    if (!inventory) {
        return [];
    } else {
        let carModel = [];
        for (let i = 0; i < inventory.length; i++) {
            carModel.push(inventory[i].car_model);
        }
        return carModel.sort();
    }
}