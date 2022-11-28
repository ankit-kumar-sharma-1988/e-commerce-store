const INTIALSTATE = {
    carts: [],
}

export const cartReducer = (state = INTIALSTATE, action) => {
    switch (action.type) {

        case "ADD_CART":

            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case "DELETE":

            return {
                ...state, carts: state.carts.filter((val, index) => index !== action.payload)
            }
            

        case "INCREMENT":
            return { ...state, carts: state.carts.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product) }
        case "DECREMENT":
           
            return { ...state, carts: state.carts.map(product => product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product) }

        default:
            return state
    }

}




