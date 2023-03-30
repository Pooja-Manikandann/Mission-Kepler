/**
 * function  retuns the total price of the array of items
 * @param {array} items - array of items to calculate total price
 * @returns {Number} -returns the calculated total price
 */
export const calculateOrderTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
        total += Number(item.price) * item.count
    })
    return total;
}