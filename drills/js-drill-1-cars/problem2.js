module.exports = function(inventory) {
    let lastCarDetail;
    if (!inventory) {
        return [];
    } else {
        let lastCarId = inventory[inventory.length - 1];
        lastCarDetail = "Last car is a " + lastCarId.car_make + " " + lastCarId.car_model;
        return lastCarDetail;
    }
}