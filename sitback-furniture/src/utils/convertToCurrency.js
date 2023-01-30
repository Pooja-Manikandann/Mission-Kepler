export const convertToCurrency = (amount) => {
    let price = Number(amount).toLocaleString('en-IN', {
        style: "currency",
        currency: 'INR',
    })
    return price.slice(0, price.length - 3);
}