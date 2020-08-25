import React from "react";
import { connect } from "react-redux";

const Checkout = (p) => {
  const checkout = () => {
    if (p.itemsInCart > 0) return p.dispatch({ type: "CHECKOUT" });
  };

  return (
    <section className="checkout">
      <button
        className={p.itemsInCart > 0 ? "enabled" : "disabled"}
        onClick={() => checkout()}
      >
        Checkout
      </button>
    </section>
  );
};

const mapStateToProps = (state, p) => {
  const itemsInCart = () => {
    let total = 0;
    Object.values(state.cart).forEach((val) => {
      total += val;
    });
    return total;
  };
  return {
    itemsInCart: itemsInCart(),
  };
};

const Container = connect(mapStateToProps)(Checkout);
export default Container;
