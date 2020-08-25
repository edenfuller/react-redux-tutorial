import React from "react";

const AddRemoveCart = (p) => {
  return (
    <div className="add-remove">
      <p className="cart-quantity">{`in cart: `}</p>
      <p className="stock-quantity">{`in stock: `}</p>
      <button className="remove">-</button>
      <button className="add">+</button>
    </div>
  );
};

export default AddRemoveCart;
