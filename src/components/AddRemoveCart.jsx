import React from "react";
import { connect } from "react-redux";

const AddRemoveCart = (p) => {
  return (
    <div className="add-remove">
      <p className="cart-quantity">{`in cart: ${p.cart}`}</p>
      <p className="stock-quantity">{`in stock: ${p.inventory}`}</p>
      <button className="remove">-</button>
      <button className="add">+</button>
    </div>
  );
};

const mapStateToProps = (state, p) => {
  return { cart: state.cart[p.name], inventory: state.inventory[p.name] };
};
// export default VisibilityFilters;
const Container = connect(mapStateToProps)(AddRemoveCart);
export default Container;
