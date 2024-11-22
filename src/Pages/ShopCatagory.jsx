import React, { useContext } from 'react';
import './Css/ShopCatagory.css';
import { Shopcontext } from '../Context/Shopcontext';
import dropdowm_icon from '../Components/Items/dropdown_icon.png';
import Item from '../Components/Item/Item';

function ShopCatagory(props) {
  // Get products from context
  const { all_product } = useContext(Shopcontext) || { all_product: [] }; // Default to empty array if context is null
  
  // Log the category to debug if it's being passed correctly
  console.log("Category prop:", props.category);

  // Filter products by category
  const filteredProducts = all_product.filter(item => item.category === props.category);
  
  // Log filtered products to debug
  console.log("Filtered Products:", filteredProducts);
  
  return (
    <div className='shop-catagory'>
      <img src={props.banner} alt="Shop category banner" />
      
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        
        <div className="shopcategory-sort">
          Sort by <img src={dropdowm_icon} alt="Sort options" />
        </div>
      </div>

      <div className="shopcategory-product">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <Item
              key={item.id} // Use the unique `id` for key
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No products available in this category.</p> // Show a message if no products are found
        )}
      </div>
    </div>
  );
}

export default ShopCatagory;
