import React, { createContext } from "react";
import all_product from "../Components/Items/all_product";

export const Shopcontext = createContext(null);

const ShopcontextProvider = (props) => {
    const contextvalue = { all_product };

    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default ShopcontextProvider;
