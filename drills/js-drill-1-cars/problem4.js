module.exports = function(inventory) {
    if (!inventory) {
        return [];
    } else {
        let carYear = [];
        for (let i = 0; i < inventory.length; i++) {
            carYear.push(inventory[i].car_year);
        }
        return carYear;
    }
}