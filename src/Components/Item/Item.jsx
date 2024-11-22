import React from "react";
import './Item.css';

const Item = ({ image, name, new_price, old_price }) => {
  // Optional: Format prices (if necessary)
  const formattedNewPrice = new_price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedOldPrice = old_price ? old_price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }) : null;

  return (
    <div className="item">
      <img src={image} alt={`Image of ${name}`} />
      <h3>{name}</h3> {/* Use a more appropriate heading for the name */}
      <div className="item-prices">
        <div className="item-price-new">
          {formattedNewPrice}
        </div>
        {formattedOldPrice && (
          <div className="item-old-price">
            {formattedOldPrice}
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
