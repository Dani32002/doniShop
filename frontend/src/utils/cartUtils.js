export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    //Calculating the price of the items
    //Base price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    //Shipping price (If is order over $100 then free, else $10)
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0: 10);

    //Tax price (15%)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

    //Total Price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);


    localStorage.setItem('cart', JSON.stringify(state))

    return state
}