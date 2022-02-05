// For Add item to Cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// untuk delete item
export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}
