import React, { useContext } from "react";
import "./Css/ShopCatagory.css";
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Items/dropdown_icon.png";
import Item from "../Components/Item/Item";

function ShopCatagory(props) {
  const { all_product } = useContext(Shopcontext) || { all_product: [] }; // Default to empty array if context is null

  // Filter products by category
  const filteredProducts = all_product.filter(
    (item) => item.category.toLowerCase() === props.category.toLowerCase()
  );

  return (
    <div className="shop-catagory">
      {/* Banner Section */}
      <div className="shop-banner-container">
        <img
          className={`banner ${props.category}-banner`}
          src={props.banner}
          alt={`${props.category} category banner`}
        />
      </div>

      {/* Header Section */}
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of{" "}
          {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort options" />
        </div>
      </div>

      {/* Product Section */}
      <div className="shopcategory-product">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id} // Unique key for each product
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p className="no-products">No products available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default ShopCatagory;
