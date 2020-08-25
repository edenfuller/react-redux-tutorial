import React from "react";
import { connect } from "react-redux";

const AddRemoveCart = (p) => {
  const changeQuantity = (val) => {
    if (p.cart + val < 0) return console.log("nothing in cart");
    else if (p.cart + val > p.inventory)
      return alert(`We don't have that many ${p.name}s in stock!`);
    else {
      const action = {
        type: "CHANGE_QUANTITY",
        value: { name: p.name, quantity: val },
      };
      return p.dispatch(action);
    }
  };

  return (
    <div className="add-remove">
      <p className="cart-quantity">{`in cart: ${p.cart}`}</p>
      <p className="stock-quantity">{`in stock: ${p.inventory}`}</p>
      <button
        className="remove"
        onClick={() => {
          changeQuantity(-1);
        }}
      >
        -
      </button>
      <button
        className="add"
        onClick={() => {
          changeQuantity(1);
        }}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state, p) => {
  return { cart: state.cart[p.name], inventory: state.inventory[p.name] };
};

const Container = connect(mapStateToProps)(AddRemoveCart);
export default Container;
