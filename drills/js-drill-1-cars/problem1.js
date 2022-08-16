module.exports = function(inventory, id) {
    let carDetail = [];
    if (!inventory) {
        return [];
    } else {
        if (Array.isArray(inventory)) {
            for (let i = 0; i < inventory.length; i++) {
                let carId;
                if (inventory[i].id === id) {
                    carId = inventory[i];
                    return carId;

                } else {
                    carDetail = [];
                }
            }
        } else {
            return [];
        }
        return carDetail;
    }
}