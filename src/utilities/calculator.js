const addNumber = (arr) => {
    const add = (prev, current) => prev + current.price;
    const sum = arr.reduce(add, 0);
    return sum;
}

export { addNumber };

