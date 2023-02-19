/**
 * function return converted INR price
 * @param {string} - amount the price amount
 * @returns {string} returns the converted equivalent INR price
 */
export const convertToCurrency = (amount) => {
    let price = Number(amount).toLocaleString('en-IN', {
        style: "currency",
        currency: 'INR',
    })
    return price.slice(0, price.length - 3);
}