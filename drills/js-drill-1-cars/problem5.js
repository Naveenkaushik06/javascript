module.exports = function(inventory) {
    if (!inventory) {
        return [];
    } else {
        let carYearBefore2000 = [];
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].car_year < 2000) {
                carYearBefore2000.push(inventory[i].car_year);
            }
        }
        return carYearBefore2000 + "\n" + carYearBefore2000.length;
    }
}