export const Add = (items) => {
    return {
        type: "ADD_CART",
        payload: items
    }
}

export const Delete = (index) => {
    console.log(index , "this is index..............");
    return {
        type: "DELETE",
        payload: index
    }
}

export const addQuantity=(added)=>{
    return{
        type:"INCREMENT",
        payload:added
    }

}

export const deleteQuantity=(deleted)=>{
    return{
        type:"DECREMENT",
        payload:deleted
    }
}