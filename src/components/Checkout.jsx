import React from "react";
import { connect } from "react-redux";

const Checkout = (p) => {
  const checkout = () => {
    if (p.itemsInCart > 0) return p.dispatch({ type: "CHECKOUT" });
  };

  return (
    <section className="checkout">
      <button
        className={itemsInCart > 0 ? "enabled" : "disabled"}
        onClick={() => checkout()}
      >
        Checkout
      </button>
    </section>
  );
};

const mapStateToProps = (state, p) => {
  return {
    itemsInCart: () => {
      return 1;
    },
  };
};

const Container = connect(mapStateToProps)(Checkout);
export default Container;
