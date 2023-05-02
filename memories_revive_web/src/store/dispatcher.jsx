
import { productsMethods } from "./slices/products";


export const mapDispatchToProps = {
    ...productsMethods,
}

export const mapStateToProps = (state) => state;