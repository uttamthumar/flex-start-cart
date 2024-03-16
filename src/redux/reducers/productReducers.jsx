import { CHECK_CART_QTY, PRODUCT_LISTS } from "../action.type";

const initialState = {
    products: null,
    isCartExists:null
};

export const productData = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LISTS:
            return {
                ...state,
                products: action.payload
            };
            case CHECK_CART_QTY:
                return {
                    ...state,
                    isCartExists: action.payload
                };
        default:
            return state;
    }
};