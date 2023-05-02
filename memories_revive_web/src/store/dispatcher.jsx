
import { basketMethods } from "./slices/basket";
import { productsMethods } from "./slices/products";


export const mapDispatchToProps = {
    ...productsMethods,
    ...basketMethods
}

export const mapStateToProps = (state) => state;