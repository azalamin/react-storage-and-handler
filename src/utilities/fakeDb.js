const fakeDb = (id) => {
    let shoppingCart;

    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        shoppingCart = JSON.parse(storedData);
    } else{
        shoppingCart = {};
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const deleteFromDb = (id) => {
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        const shoppingCart = JSON.parse(storedData);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export {
    fakeDb,
    deleteFromDb
};

